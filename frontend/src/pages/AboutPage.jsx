import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <img src="/golden_hope_logo.svg" alt="Golden Hope" className="about-logo" />
        <h1 className="about-hero-title">Our Story</h1>
        <p className="about-hero-sub">✦ Every piece carries a purpose ✦</p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="about-card">
          <span className="about-icon">🌸</span>
          <h2>Who We Are</h2>
          <p>
            Golden Hope is a New York-based jewelry brand with roots in Chinese artisan tradition. 
            We partner directly with disability organizations across China, bringing their 
            handcrafted jewelry to customers in the United States.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🤝</span>
          <h2>Our Mission</h2>
          <p>
            We believe that beautiful things should do good in the world. Every purchase you make 
            supports the artisans who created it — a portion of every sale goes directly into a 
            fund that supports disabled craftspeople and their communities in China.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">✦</span>
          <h2>The Craft</h2>
          <p>
            Each piece in our collection is handmade by skilled artisans drawing from centuries 
            of Chinese jewelry tradition — cloisonné, jade carving, pearl setting, and intricate 
            metalwork. No two pieces are exactly alike.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="about-impact">
        <h2 className="about-impact-title">Our Impact</h2>
        <div className="about-impact-grid">
          <div className="about-impact-stat">
            <p className="about-impact-number">100%</p>
            <p className="about-impact-label">Handcrafted by artisans</p>
          </div>
          <div className="about-impact-stat">
            <p className="about-impact-number">✦</p>
            <p className="about-impact-label">Partnered with disability organizations in China</p>
          </div>
          <div className="about-impact-stat">
            <p className="about-impact-number">$</p>
            <p className="about-impact-label">Every sale funds artisan communities</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="about-quote">
        <blockquote>
          "When you wear a piece from Golden Hope, you carry with you the skill, 
          the heart, and the hope of the hands that made it."
        </blockquote>
      </section>

    </div>
  );
}

export default AboutPage;