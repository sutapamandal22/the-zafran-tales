import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Home.css";

const features = [
  { icon: "🌶️", title: "Authentic Spices", desc: "Hand-picked spices from Punjab, Rajasthan, Kashmir & Uttar Pradesh." },
  { icon: "🫕", title: "Tandoor Specialists", desc: "Our clay tandoor runs at 480°C for that perfect char & smokiness." },
  { icon: "🎵", title: "Live Qawwali Nights", desc: "Live Qawwali, ghazals & Punjabi folk music every weekend." },
  { icon: "🧈", title: "Pure Desi Ghee", desc: "Every dish finished with farm-fresh desi ghee for authentic flavour." },
];

const regions = [
  { name: "Punjabi",    desc: "Dal makhani, butter chicken, sarson ka saag & tandoori classics", icon: "🫓" },
  { name: "Awadhi",    desc: "Lucknowi dum biryani, galouti kebab & shahi korma",                icon: "👑" },
  { name: "Mughlai",   desc: "Rich gravies, seekh kebabs, shahi paneer & nihari",               icon: "🏰" },
  { name: "Rajasthani",desc: "Laal maas, dal baati churma & ker sangri",                        icon: "🏜️" },
];

const stats = [
  { number: "25+", label: "Years of Legacy" },
  { number: "80+", label: "Dishes on Menu" },
  { number: "10K+", label: "Happy Guests" },
  { number: "4.9★", label: "Average Rating" },
];

const reviews = [
  { name: "Priya Sharma",  rating: 5, avatar: "PS", comment: "Absolutely divine! The Dal Makhani and Butter Naan were out of this world. The ambiance is royal and the service was impeccable." },
  { name: "Rahul Mehta",   rating: 5, avatar: "RM", comment: "Best biryani I've had outside of Lucknow. The Mutton Biryani was fragrant, perfectly spiced and the portions are generous." },
  { name: "Ananya Singh",  rating: 4, avatar: "AS", comment: "Loved the Paneer Tikka and Kadai Paneer. The Qawwali night was a fantastic experience. Will definitely come back!" },
  { name: "Vikram Kapoor", rating: 5, avatar: "VK", comment: "The Seekh Kebabs were smoky and juicy. Tandoori Chicken was perfectly charred. A must-visit for North Indian food lovers." },
];

const Stars = ({ rating }) => (
  <div className="home-stars">
    {[1,2,3,4,5].map((s) => (
      <span key={s} className={s <= rating ? "star-filled" : "star-empty"}>★</span>
    ))}
  </div>
);

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const featuresRef  = useScrollReveal();
  const regionsRef   = useScrollReveal();
  const aboutRef     = useScrollReveal();
  const reviewsRef   = useScrollReveal();

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-sub">🪔 Welcome to The Zafran Tales</p>
          <h1>The Royal Flavours<br />of North India</h1>
          <p className="hero-desc">
            From the smoky tandoors of Punjab to the royal kitchens of Lucknow — every dish is a celebration of North India's rich culinary heritage.
          </p>
          <div className="hero-btns">
            <Link to="/reservations" className="btn btn-gold">Reserve a Table</Link>
            <Link to="/menu" className="btn btn-outline">Explore Menu</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>↓</span>
          scroll
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="page-section features-section">
        <div className="container">
          <div className="section-header">
            <h2>The Zafran Tales Experience</h2>
            <div className="divider" />
            <p>Where every meal is a celebration of North India's culinary soul</p>
          </div>
          <div className="features-grid reveal-grid" ref={featuresRef}>
            {features.map((f, i) => (
              <div key={f.title} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Cuisines */}
      <section className="page-section regions-section">
        <div className="container">
          <div className="section-header">
            <h2>Four Royal Traditions</h2>
            <div className="divider" />
            <p>North India's finest regional cuisines, all under one roof</p>
          </div>
          <div className="regions-grid reveal-grid" ref={regionsRef}>
            {regions.map((r, i) => (
              <div key={r.name} className="region-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="region-icon">{r.icon}</span>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="about-strip">
        <div className="container about-inner reveal-grid" ref={aboutRef}>
          <div className="about-text">
            <span className="tag">Our Story</span>
            <h2>Cooking with Soul Since 1998</h2>
            <p>
              Founded by Chef Arjun Sharma from Amritsar, The Zafran Tales brings the soul of North India's royal kitchens to your table. Every recipe is rooted in Punjabi, Awadhi & Mughlai tradition — cooked slow, with pure desi ghee, hand-ground spices & generations of love.
            </p>
            <Link to="/menu" className="btn btn-gold" style={{ marginTop: 28 }}>View Full Menu</Link>
          </div>
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"
              alt="North Indian food spread"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"; }}
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="page-section reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Guests Say</h2>
            <div className="divider" />
            <p>Real reviews from real food lovers</p>
          </div>
          <div className="home-reviews-grid reveal-grid" ref={reviewsRef}>
            {reviews.map((r, i) => (
              <div key={r.name} className="home-review-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="home-review-header">
                  <div className="home-avatar">{r.avatar}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <Stars rating={r.rating} />
                  </div>
                </div>
                <p className="home-review-text">"{r.comment}"</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/reviews" className="btn btn-gold">View All Reviews</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
