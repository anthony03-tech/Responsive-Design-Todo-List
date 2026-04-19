import "./Hero.css";

export default function Hero({ onJoinUs }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__headline">
          Dozy helps you to Manage your behavior, not just your tasks.
        </h1>
        <p className="hero__sub">
          A simple tool designed to help you overcome procrastination, reduce
          overwhelm, and focus on what matters today.
        </p>
        <button className="hero__cta" onClick={onJoinUs}>
          Start Now <span>→</span>
        </button>
      </div>

      <div className="hero__mockup">
        <img src="./image14.png" alt="img"></img>
      </div>
    </section>
  );
}