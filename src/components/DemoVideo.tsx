function DemoVideo() {
  return (
    <section className="demo-video" aria-labelledby="demo-video-title">
      <span className="demo-video__eyebrow mono-label" id="demo-video-title">
        LIVE DEMO · AURORA
      </span>
      <figure>
        <div className="demo-video__window">
          <div className="demo-video__toolbar" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="demo-video__url">aurora.app</span>
          </div>
          <video
            className="demo-video__media"
            src="/Aurora_video.mp4"
            poster="/aurora-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Aurora answering a question using stored memory"
          />
        </div>
        <figcaption className="demo-video__caption">
          <a
            href="https://github.com/zj6pxpr5hd-creator/aurora_prot"
            target="_blank"
            rel="noreferrer"
          >
            Aurora retrieves saved context to answer a question with persistent memory.
            <span> View source ↗</span>
          </a>
        </figcaption>
      </figure>
    </section>
  );
}

export default DemoVideo;
