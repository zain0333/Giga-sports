import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFire,
  FaStar,
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
  FaTrophy,
  FaCheckCircle,
  FaPaperPlane,
  FaQuoteLeft,
  FaTag,
} from "react-icons/fa";

import FlashSale from "../components/FlashSale";
import Statistics from "../components/Statistics";
import ProductCard from "../components/ProductCard";
import AISportsAssistant from "../components/AISportsAssistant";
import { products } from "../data/products";
import "./Home.css";

// Sport Category data for visual grid
const categories = [
  {
    id: "cricket",
    name: "Cricket Gear",
    category: "Cricket",
    itemCount: "5+ Items",
    tag: "Tournament Grade",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "football",
    name: "Football & Cleats",
    category: "Football",
    itemCount: "Pro Match Balls",
    tag: "FIFA Approved",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "Badminton",
    itemCount: "Lightweight Rackets",
    tag: "Carbon Fiber",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gym",
    name: "Gym & Fitness",
    category: "Gym Equipment",
    itemCount: "Dumbbells & Weights",
    tag: "Heavy Duty",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "running",
    name: "Running & Shoes",
    category: "Running",
    itemCount: "Speed Footwear",
    tag: "Cushioned Sole",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "accessories",
    name: "Accessories & Bags",
    category: "Sports Bags",
    itemCount: "Gear & Eyewear",
    tag: "Essential Kits",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Hamza Tariq",
    role: "Club Cricket Captain",
    comment:
      "The English Willow cricket bat from GIGA SPORTS is exceptionally balanced with huge ping. Delivered within 24 hours in pristine condition!",
    rating: 5,
    sport: "🏏 Cricket",
  },
  {
    id: 2,
    name: "Zainab Malik",
    role: "CrossFit Trainer",
    comment:
      "Top-tier dumbbell set and grip gear. GIGA SPORTS is my go-to store for all gym accessories and athlete fitness equipment.",
    rating: 5,
    sport: "🏋️ Fitness",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Semi-Pro Footballer",
    comment:
      "Match-grade football quality with outstanding durability. You won't find better authentic sports gear at these prices anywhere.",
    rating: 5,
    sport: "⚽ Football",
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [emailInput, setEmailInput] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Available filter tags
  const filterTabs = [
    "All",
    "Cricket",
    "Football",
    "Badminton",
    "Gym Equipment",
    "Running",
  ];

  // Filter products based on selected tab
  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 8)
      : products.filter(
          (p) =>
            p.category.toLowerCase() === selectedCategory.toLowerCase() ||
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="home-wrapper">
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="pro-hero-section">
        <div className="hero-glow-blob blob-1"></div>
        <div className="hero-glow-blob blob-2"></div>

        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="pro-hero-content">
                <div className="hero-badge">
                  <span className="badge-pulse"></span>
                  <FaFire className="badge-icon" />
                  <span>NEW SEASON 2026 GEAR</span>
                </div>

                <h1 className="hero-title">
                  GEAR UP FOR <span className="hero-accent">VICTORY</span> WITH
                  AUTHENTIC SPORTS EQUIPMENT
                </h1>

                <p className="hero-subtitle">
                  Elevate your game with match-grade cricket bats, tournament
                  footballs, precision badminton rackets, and pro gym gear built
                  for peak athletic performance.
                </p>

                <div className="hero-cta-group">
                  <Link to="/products" className="btn-hero-primary">
                    <span>Shop All Gear</span>
                    <FaArrowRight className="btn-icon" />
                  </Link>

                  <a href="#flash-sale" className="btn-hero-secondary">
                    <FaTag className="me-2" />
                    <span>View Hot Deals</span>
                  </a>
                </div>

                {/* Hero Trust Micro-Indicators */}
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <FaCheckCircle className="text-warning" />
                    <span>100% Genuine Brands</span>
                  </div>

                  <div className="trust-item">
                    <FaShippingFast className="text-warning" />
                    <span>Express Dispatch</span>
                  </div>

                  <div className="trust-item">
                    <FaShieldAlt className="text-warning" />
                    <span>Verified Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Showcase */}
            <div className="col-lg-6">
              <div className="hero-visual-card">
                <div className="visual-media-container">
                  <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional Athlete Training"
                    className="hero-main-img"
                  />

                  <div className="visual-gradient-overlay"></div>
                </div>

                {/* Floating Badge 1 - Top Right */}
                <div className="floating-stat-badge stat-top">
                  <div className="stat-icon-circle gold">
                    <FaTrophy />
                  </div>

                  <div>
                    <span className="stat-label">Official Quality</span>
                    <strong className="stat-value">#1 Rated Shop</strong>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Left */}
                <div className="floating-stat-badge stat-bottom">
                  <div className="stat-icon-circle green">
                    <FaStar />
                  </div>

                  <div>
                    <div className="stat-stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="stat-label">
                      4.9 / 5.0 (1,200+ Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Sport Bar */}
        <div className="hero-quick-bar">
          <div className="container">
            <div className="quick-bar-wrapper">
              <span className="quick-label">Popular Sports:</span>

              <div className="quick-tags">
                <Link to="/products" className="quick-chip">
                  🏏 Cricket
                </Link>

                <Link to="/products" className="quick-chip">
                  ⚽ Football
                </Link>

                <Link to="/products" className="quick-chip">
                  🏸 Badminton
                </Link>

                <Link to="/products" className="quick-chip">
                  🏋️ Gym & Fitness
                </Link>

                <Link to="/products" className="quick-chip">
                  👟 Running
                </Link>

                <Link to="/products" className="quick-chip">
                  🎽 Sports Apparel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUE PROPOSITIONS / TRUST BAR
          ========================================================= */}
      <section className="trust-features-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-box">
                <div className="feature-icon-box">
                  <FaShippingFast />
                </div>

                <div className="feature-text">
                  <h3>Fast & Safe Delivery</h3>
                  <p>Express nationwide shipping on all major sports gear</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-box">
                <div className="feature-icon-box">
                  <FaShieldAlt />
                </div>

                <div className="feature-text">
                  <h3>100% Genuine Gear</h3>
                  <p>
                    Authentic products straight from certified manufacturers
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-box">
                <div className="feature-icon-box">
                  <FaUndoAlt />
                </div>

                <div className="feature-text">
                  <h3>Hassle-Free Returns</h3>
                  <p>7-day easy exchange guarantee for total peace of mind</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-box">
                <div className="feature-icon-box">
                  <FaHeadset />
                </div>

                <div className="feature-text">
                  <h3>24/7 Expert Support</h3>
                  <p>
                    Dedicated sports specialists ready to guide your purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHOP BY SPORT CATEGORIES
          ========================================================= */}
      <section className="categories-showcase-section">
        <div className="container">
          <div className="section-header-modern text-center">
            <span className="section-pill">EXPLORE CATALOG</span>

            <h2 className="section-main-title">Shop by Sport & Category</h2>

            <p className="section-description">
              Find the perfect equipment tailored specifically to your favorite
              sport and competition requirements.
            </p>
          </div>

          <div className="row g-4">
            {categories.map((cat) => (
              <div className="col-12 col-md-6 col-lg-4" key={cat.id}>
                <Link to="/products" className="pro-category-card">
                  <div className="category-img-holder">
                    <img src={cat.image} alt={cat.name} loading="lazy" />

                    <div className="category-overlay"></div>
                  </div>

                  <div className="category-content-layer">
                    <span className="category-tag-pill">{cat.tag}</span>

                    <h3 className="category-title">{cat.name}</h3>

                    <div className="category-action-row">
                      <span className="category-count">{cat.itemCount}</span>

                      <span className="category-arrow-btn">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FLASH SALE SECTION
          ========================================================= */}
      <div id="flash-sale">
        <FlashSale />
      </div>

      {/* =========================================================
          AI SPORTS ASSISTANT
          ========================================================= */}
      <AISportsAssistant />

      {/* =========================================================
          FEATURED PRODUCTS WITH CATEGORY FILTER TABS
          ========================================================= */}
      <section className="featured-products-section">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
            <div>
              <span className="section-pill">CHAMPION'S CHOICE</span>

              <h2 className="section-main-title mb-1">Featured Sports Gear</h2>

              <p className="section-description mb-0">
                Top rated performance gear engineered for champions
              </p>
            </div>

            <Link to="/products" className="view-all-link">
              <span>Explore All Products</span>
              <FaArrowRight className="ms-2" />
            </Link>
          </div>

          {/* Interactive Filter Pills */}
          <div className="filter-pill-container">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`filter-pill-btn ${
                  selectedCategory === tab ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="row g-4 mt-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5 text-muted">
                <p>No products found in this category.</p>

                <button
                  type="button"
                  className="btn btn-outline-primary mt-2"
                  onClick={() => setSelectedCategory("All")}
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPLIT PROMOTIONAL CAMPAIGN BANNERS
          ========================================================= */}
      <section className="promo-banners-section">
        <div className="container">
          <div className="row g-4">
            {/* Banner 1: Cricket */}
            <div className="col-12 col-lg-6">
              <div className="promo-card promo-cricket">
                <div className="promo-content">
                  <span className="promo-badge">LEAGUE EDITION</span>

                  <h3>Pro Match Cricket Gear</h3>

                  <p>
                    Premium English Willow bats, impact-resistant pads, and
                    tournament helmets.
                  </p>

                  <Link to="/products" className="btn-promo-action">
                    <span>Shop Cricket</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* Banner 2: Gym & Fitness */}
            <div className="col-12 col-lg-6">
              <div className="promo-card promo-fitness">
                <div className="promo-content">
                  <span className="promo-badge promo-badge-orange">
                    POWER & SPEED
                  </span>

                  <h3>Heavy-Duty Fitness & Gym</h3>

                  <p>
                    Precision hex dumbbells, running footwear, and athlete
                    training kits.
                  </p>

                  <Link to="/products" className="btn-promo-action">
                    <span>Explore Fitness</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANIMATED STATISTICS SECTION
          ========================================================= */}
      <Statistics />

      {/* =========================================================
          ATHLETE TESTIMONIALS & REVIEWS
          ========================================================= */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-modern text-center">
            <span className="section-pill">ATHLETE STORIES</span>

            <h2 className="section-main-title">Trusted By Players & Coaches</h2>

            <p className="section-description">
              Hear directly from athletes who rely on GIGA SPORTS gear for every
              match.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-12 col-md-4" key={t.id}>
                <div className="testimonial-card">
                  <div className="testimonial-top">
                    <FaQuoteLeft className="quote-icon" />

                    <span className="testimonial-sport">{t.sport}</span>
                  </div>

                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="testimonial-text">"{t.comment}"</p>

                  <div className="testimonial-author">
                    <div className="author-avatar-badge">
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="author-name">{t.name}</h4>

                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VIP CLUB / NEWSLETTER
          ========================================================= */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="newsletter-pill">GIGA CHAMPIONS CLUB</span>

                <h2>Get 15% Off Your Next Order</h2>

                <p>
                  Subscribe to receive exclusive drops, athlete discounts, and
                  new season arrivals straight to your inbox.
                </p>
              </div>

              <div className="col-lg-5">
                {subscribed ? (
                  <div className="newsletter-success">
                    <FaCheckCircle className="success-icon" />

                    <div>
                      <h4>Welcome to the Club!</h4>

                      <p>
                        Use code <strong>CHAMPION15</strong> at checkout for 15%
                        off.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <div className="input-group-custom">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address..."
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="newsletter-input"
                      />

                      <button type="submit" className="newsletter-btn">
                        <FaPaperPlane className="me-2" />
                        <span>Join</span>
                      </button>
                    </div>

                    <small className="newsletter-note">
                      🔒 We respect your privacy. Unsubscribe at any time.
                    </small>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
