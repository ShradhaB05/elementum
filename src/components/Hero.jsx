import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative shapes */}
      <div className="hero-squiggle" />
      
      <div className="hero-blob hero-blob--green" />
      <div className="hero-drop hero-drop--purple" />
      <div className="hero-dot hero-dot--yellow" />
      <div className="hero-dot hero-dot--coral" />

      <div className="hero-heading-wrap">
        <h1 className="hero-h1">
          The <span className="hl-underline">thinkers</span> and
          <br />
          doers were <span className="hl-pink">changing</span>
          <br />
          the <span className="hl-green">status</span> Quo with
        </h1>
      </div>

      <p className="hero-sub">
        We are a team of strategists, designers communicators, researchers. Together,
        we believe that progress only happens when you refuse to play things safe.
      </p>

      <div className="hero-avatars">
        <div className="av-slot av-slot--bottom"><div className="av"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--top"><div className="av"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--top"><div className="av"><img src="https://randomuser.me/api/portraits/men/55.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--bottom"><div className="av"><img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--top"><div className="av"><img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--bottom"><div className="av"><img src="https://randomuser.me/api/portraits/men/77.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--top"><div className="av"><img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" /></div></div>
        <div className="av-slot av-slot--bottom"><div className="av"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" /></div></div>
      </div>
    </section>
  );
}
