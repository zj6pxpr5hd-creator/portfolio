import { useEffect, useRef } from 'react';
import '../styles/AnimatedBackground.css';

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const light = lightRef.current;

    if (!bg || !light) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId: number;

    const updateTarget = (e: PointerEvent) => {
      const rect = bg.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onEnter = (e: PointerEvent) => {
      updateTarget(e);
      // snap to the cursor so the light doesn't sweep in from the corner
      currentX = targetX;
      currentY = targetY;
      bg.classList.add('active');
    };

    const onLeave = () => bg.classList.remove('active');

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      const half = light.offsetWidth / 2;
      light.style.transform =
        `translate(${currentX - half}px, ${currentY - half}px)`;

      rafId = requestAnimationFrame(animate);
    };
    animate();

    bg.addEventListener('pointermove', updateTarget);
    bg.addEventListener('pointerenter', onEnter);
    bg.addEventListener('pointerleave', onLeave);

    // cleanup when the component unmounts
    return () => {
      cancelAnimationFrame(rafId);
      bg.removeEventListener('pointermove', updateTarget);
      bg.removeEventListener('pointerenter', onEnter);
      bg.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="bg" ref={bgRef}>
      <div className="light" ref={lightRef} />
      {children}
    </div>
  );
}