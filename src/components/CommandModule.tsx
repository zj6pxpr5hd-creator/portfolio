import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187,
      0.366025403784439,
      -0.577350269189626,
      0.024390243902439
    );
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0)) +
      i.x + vec3(0.0, i1.x, 1.0)
    );
    vec3 m = max(
      0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
      0.0
    );
    m *= m;
    m *= m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.792842403 - 0.853734601 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;
    float mouseGlow = smoothstep(0.4, 0.0, length(st - mouse)) * 0.25;
    float t = u_time * 0.15;
    vec2 q;
    q.x = snoise(st * 2.4 + vec2(t * 0.3, t * 0.15));
    q.y = snoise(st * 2.4 + vec2(t * 0.1, -t * 0.2));
    vec2 r;
    r.x = snoise(st * 3.0 + 1.2 * q + vec2(1.7, 9.2) + 0.2 * t);
    r.y = snoise(st * 3.0 + 1.2 * q + vec2(8.3, 2.8) - 0.2 * t);
    float f = (snoise(st * 2.6 + r * 1.5) + 1.0) * 0.5;
    vec3 baseDark = vec3(0.043, 0.051, 0.063);
    vec3 midDark = vec3(0.070, 0.082, 0.102);
    vec3 emeraldGlow = vec3(0.063, 0.725, 0.506);
    vec3 phosphorCore = vec3(0.204, 0.925, 0.600);
    vec2 gridSt = fract(st * vec2(36.0, 20.0));
    float gridLine = step(0.965, gridSt.x) + step(0.965, gridSt.y);
    vec3 col = mix(baseDark, midDark, f);
    float contour = abs(sin(f * 8.0 + t * 1.2));
    float ridge = 1.0 - smoothstep(0.0, 0.07, contour);
    col += emeraldGlow * pow(f, 2.8) * 0.55;
    col += phosphorCore * ridge * 0.35;
    col += emeraldGlow * mouseGlow * 1.2;
    col += vec3(gridLine * 0.025);
    col *= smoothstep(1.3, 0.25, length((st - 0.5) * vec2(1.1, 0.9)));
    gl_FragColor = vec4(col, 1.0);
  }
`;

type ShaderResources = {
  program: WebGLProgram;
  vertexShader: WebGLShader;
  fragmentShader: WebGLShader;
  buffer: WebGLBuffer;
};

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Unable to compile Hero background shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createResources(gl: WebGLRenderingContext): ShaderResources | null {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    return null;
  }

  const program = gl.createProgram();
  const buffer = gl.createBuffer();
  if (!program || !buffer) {
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (program) gl.deleteProgram(program);
    if (buffer) gl.deleteBuffer(buffer);
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Unable to link Hero background shader:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteBuffer(buffer);
    return null;
  }

  return { program, vertexShader, fragmentShader, buffer };
}

function CommandModule() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl", { alpha: true, antialias: false }) ??
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const resources = createResources(gl);
    if (!resources) return;

    const { program, vertexShader, fragmentShader, buffer } = resources;
    const position = gl.getAttribLocation(program, "a_position");
    const time = gl.getUniformLocation(program, "u_time");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const mousePosition = gl.getUniformLocation(program, "u_mouse");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let width = 1;
    let height = 1;
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const syncSize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
      height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const render = (timestamp: number) => {
      syncSize();
      gl.viewport(0, 0, width, height);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      if (time) gl.uniform1f(time, timestamp * 0.001);
      if (resolution) gl.uniform2f(resolution, width, height);
      if (mousePosition) gl.uniform2f(mousePosition, width * 0.5, height * 0.5);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!prefersReducedMotion.matches) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    render(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__shader" aria-hidden="true" />;
}

export default CommandModule;
