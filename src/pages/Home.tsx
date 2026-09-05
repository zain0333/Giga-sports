import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
  FaCheckCircle,
  FaPaperPlane,
  FaQuoteLeft,
  FaRobot,
  FaDumbbell,
  FaAppleAlt,
  FaComments,
  FaBolt,
  FaBoxOpen,
  FaShoppingCart,
  FaCheck,
} from "react-icons/fa";

import FlashSale from "../components/FlashSale";
import Statistics from "../components/Statistics";
import ProductCard from "../components/ProductCard";
import AISportsAssistant from "../components/AISportsAssistant";
import CinematicHeroVideo from "../components/CinematicHeroVideo";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { productBundles, createBundleProduct, type ProductBundle } from "../data/bundles";
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
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [emailInput, setEmailInput] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [addedHomeBundleId, setAddedHomeBundleId] = useState<number | null>(null);

  const handleHomeAddBundle = (bundle: ProductBundle) => {
    const bundleProduct = createBundleProduct(bundle);
    addToCart(bundleProduct);
    setAddedHomeBundleId(bundle.id);
    setTimeout(() => setAddedHomeBundleId(null), 2500);
  };

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
          CINEMATIC HERO VIDEO SECTION (Slow-Motion Scenes & Overlays)
          ========================================================= */}
      <CinematicHeroVideo />

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
          FEATURED AI SPORTS COACH SECTION
          ========================================================= */}
      <section className="home-ai-coach-showcase">
        <div className="container">
          <div className="home-ai-coach-card">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7">
                <div className="ai-showcase-content">
                  <div className="ai-showcase-badge">
                    <FaBolt className="me-1" />
                    <span>NEW • ATHLETE AI INTELLIGENCE</span>
                  </div>

                  <h2 className="ai-showcase-title">
                    Train Like a Champion With <span>GIGA AI Sports Coach</span>
                  </h2>

                  <p className="ai-showcase-desc">
                    Get custom daily training protocols for cricket, football, badminton, gym & running.
                    Chat 24/7 with pro coach personas, compute match-day nutrition macros, and master technical biomechanics.
                  </p>

                  <div className="ai-features-mini-grid">
                    <div className="ai-feat-chip">
                      <FaDumbbell className="feat-chip-icon" />
                      <div>
                        <strong>Custom Workouts</strong>
                        <span>Sport-specific daily drills</span>
                      </div>
                    </div>

                    <div className="ai-feat-chip">
                      <FaComments className="feat-chip-icon" />
                      <div>
                        <strong>24/7 AI Coach Chat</strong>
                        <span>4 Specialized Mentors</span>
                      </div>
                    </div>

                    <div className="ai-feat-chip">
                      <FaAppleAlt className="feat-chip-icon" />
                      <div>
                        <strong>Nutrition Engine</strong>
                        <span>Match hydration & macros</span>
                      </div>
                    </div>
                  </div>

                  <div className="ai-showcase-actions">
                    <Link to="/ai-coach" className="btn-launch-ai-coach">
                      <FaRobot />
                      <span>Launch AI Sports Coach Studio</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="ai-showcase-interactive-preview">
                  <div className="preview-top-bar">
                    <div className="preview-coach-info">
                      <span className="preview-avatar">⚡</span>
                      <div>
                        <strong>Coach Vance</strong>
                        <span className="preview-status">● Live AI Tactical Advice</span>
                      </div>
                    </div>
                    <span className="preview-badge-pro">PRO MENTOR</span>
                  </div>

                  <div className="preview-chat-body">
                    <div className="preview-msg user">
                      <span>How do I increase my cricket bowling speed by 10 km/h?</span>
                    </div>
                    <div className="preview-msg coach">
                      <span>
                        ⚡ <strong>Coach's Blueprint:</strong> Lock the front leg (the catapult brace) at release. Pull down hard with non-bowling arm to create rotational torque. Practice with tournament leather balls!
                      </span>
                    </div>
                  </div>

                  <Link to="/ai-coach" className="preview-cta-btn">
                    <span>Ask Any Question in AI Studio</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED VALUE BUNDLES SECTION
          ========================================================= */}
      <section className="home-bundles-showcase">
        <div className="container">
          <div className="section-header-modern text-center">
            <span className="section-pill">
              <FaBoxOpen className="me-1" />
              EXCLUSIVE VALUE COMBOS
            </span>

            <h2 className="section-main-title">Curated Match Bundles & Kits</h2>

            <p className="section-description">
              Save up to 28% with all-in-one tournament packages. 1-click cart addition with instant combo discounts.
            </p>
          </div>

          <div className="row g-4">
            {productBundles.slice(0, 3).map((bundle) => {
              const isAdded = addedHomeBundleId === bundle.id;

              return (
                <div className="col-12 col-md-6 col-lg-4" key={bundle.id}>
                  <div className="home-bundle-card">
                    <div className="home-bundle-img-wrap">
                      <span className="home-bundle-badge">{bundle.badge}</span>
                      <img src={bundle.image} alt={bundle.name} />
                      <div className="home-bundle-cat-pill">{bundle.category}</div>
                    </div>

                    <div className="home-bundle-content">
                      <h4>{bundle.name}</h4>
                      <p className="home-bundle-tagline">{bundle.tagline}</p>

                      <div className="home-bundle-items-summary">
                        <span>Includes {bundle.items.length} items:</span>
                        <small>
                          {bundle.items.map((it) => it.customNote).join(" • ")}
                        </small>
                      </div>

                      <div className="home-bundle-pricing-row">
                        <div>
                          <span className="home-bundle-orig">
                            Rs. {bundle.originalPrice.toLocaleString()}
                          </span>
                          <div className="home-bundle-price">
                            Rs. {bundle.bundlePrice.toLocaleString()}
                          </div>
                        </div>
                        <span className="home-bundle-save-tag">
                          Save Rs. {bundle.savings.toLocaleString()}
                        </span>
                      </div>

                      <div className="home-bundle-actions">
                        <button
                          type="button"
                          className={`btn-home-add-bundle ${isAdded ? "added" : ""}`}
                          onClick={() => handleHomeAddBundle(bundle)}
                        >
                          {isAdded ? (
                            <>
                              <FaCheck /> Added to Cart!
                            </>
                          ) : (
                            <>
                              <FaShoppingCart /> Add Bundle
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-4">
            <Link to="/bundles" className="btn-explore-all-bundles">
              <span>Explore All Product Bundles & Custom Builder</span>
              <FaArrowRight />
            </Link>
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
