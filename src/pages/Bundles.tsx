import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaCheck,
  FaPercent,
  FaStar,
  FaBolt,
  FaShieldAlt,
  FaPlus,
  FaArrowRight,
  FaTag,
  FaSlidersH,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { products, type Product } from "../data/products";
import {
  productBundles,
  createBundleProduct,
  getBundleProductsDetails,
  type ProductBundle,
} from "../data/bundles";
import "./Bundles.css";

const Bundles: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [addedBundleId, setAddedBundleId] = useState<number | null>(null);

  // =========================================================
  // CUSTOM BUNDLE BUILDER STATE
  // =========================================================
  const [customStep1, setCustomStep1] = useState<Product | null>(products[0]); // Primary Gear
  const [customStep2, setCustomStep2] = useState<Product | null>(products[3]); // Footwear/Apparel
  const [customStep3, setCustomStep3] = useState<Product | null>(products[6]); // Accessory/Ball
  const [customAdded, setCustomAdded] = useState<boolean>(false);

  // Primary gear choices
  const step1Options = useMemo(() => {
    return products.filter((p) => [1, 2, 3, 5].includes(p.id));
  }, []);

  // Apparel/Footwear choices
  const step2Options = useMemo(() => {
    return products.filter((p) => [4, 6].includes(p.id));
  }, []);

  // Accessory choices
  const step3Options = useMemo(() => {
    return products.filter((p) => [7, 8, 2].includes(p.id) || p.category.includes("Accessories") || p.category.includes("Cricket"));
  }, []);

  // Custom bundle pricing
  const customCalculations = useMemo(() => {
    const p1 = customStep1?.price || 0;
    const p2 = customStep2?.price || 0;
    const p3 = customStep3?.price || 0;
    const originalTotal = p1 + p2 + p3;
    const discountRate = 0.15; // 15% discount for custom bundles
    const discountAmount = Math.round(originalTotal * discountRate);
    const finalPrice = originalTotal - discountAmount;

    return {
      originalTotal,
      discountAmount,
      finalPrice,
      savingsPercent: 15,
    };
  }, [customStep1, customStep2, customStep3]);

  const handleAddCustomBundle = () => {
    if (!customStep1 || !customStep2 || !customStep3) return;

    const customBundleProduct: Product = {
      id: 99900 + Math.floor(Math.random() * 999),
      name: `Custom Athlete Bundle (${customStep1.name.split(" ")[0]} + ${customStep2.name.split(" ")[0]} + ${customStep3.name.split(" ")[0]})`,
      category: "Custom Bundle Pack",
      price: customCalculations.finalPrice,
      image: customStep1.image,
      rating: 5.0,
      reviews: 1,
      badge: "🎨 CUSTOM BUNDLE (SAVE 15%)",
      stock: 10,
      description: `Custom 3-piece bundle including ${customStep1.name}, ${customStep2.name}, and ${customStep3.name}.`,
    };

    addToCart(customBundleProduct);
    setCustomAdded(true);
    setTimeout(() => setCustomAdded(false), 2500);
  };

  // Filter curated bundles
  const filteredBundles = useMemo(() => {
    if (selectedCategory === "All") return productBundles;
    return productBundles.filter((b) => b.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddBundleToCart = (bundle: ProductBundle) => {
    const bundleProduct = createBundleProduct(bundle);
    addToCart(bundleProduct);
    setAddedBundleId(bundle.id);
    setTimeout(() => setAddedBundleId(null), 2500);
  };

  const getCleanImageUrl = (image: string): string => {
    if (!image) return "";
    const match = image.match(/\]\((.*?)\)/);
    if (match && match[1]) return match[1];
    return image;
  };

  return (
    <main className="bundles-page">
      {/* =========================================================
          HERO BANNER
          ========================================================= */}
      <section className="bundles-hero">
        <div className="container">
          <div className="bundles-hero-inner">
            <div className="bundles-badge-wrap">
              <span className="bundle-pill-gold">
                <FaPercent /> VALUE SAVINGS ARENA
              </span>
              <span className="bundle-pill-green">
                <FaBolt /> UP TO 28% OFF COMBOS
              </span>
            </div>

            <h1 className="bundles-hero-title">
              Curated <span>Sports Bundles</span> & Combos
            </h1>

            <p className="bundles-hero-desc">
              Get tournament-ready gear packages curated by pro coaches. Save big on cricket kits, football match packs, gym setups, and custom athlete combos with 1-click cart addition.
            </p>

            <div className="bundles-hero-stats">
              <div className="bundle-stat-card">
                <span className="stat-num">Rs. 5,300+</span>
                <span className="stat-lbl">Max Bundle Savings</span>
              </div>
              <div className="bundle-stat-card">
                <span className="stat-num">100% Genuine</span>
                <span className="stat-lbl">Tournament Grade Gear</span>
              </div>
              <div className="bundle-stat-card">
                <span className="stat-num">1-Click</span>
                <span className="stat-lbl">Fast Bundle Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY TABS FILTER
          ========================================================= */}
      <section className="bundles-filter-section">
        <div className="container">
          <div className="bundles-filter-bar">
            {["All", "Cricket", "Football", "Gym Equipment", "Badminton", "Running", "Multi-Sport", "Custom Builder"].map(
              (cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`bundle-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "Custom Builder" ? <FaSlidersH /> : <FaBoxOpen />}
                  <span>{cat}</span>
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURATED BUNDLES CATALOG
          ========================================================= */}
      {selectedCategory !== "Custom Builder" && (
        <section className="container py-5">
          <div className="section-title-wrap">
            <span className="sub-tag">PRO MATCH PACKS</span>
            <h2>Curated Value Combos ({filteredBundles.length})</h2>
            <p>Complete match kits with guaranteed savings compared to buying individual items.</p>
          </div>

          <div className="bundles-grid">
            {filteredBundles.map((bundle) => {
              const details = getBundleProductsDetails(bundle);
              const isAdded = addedBundleId === bundle.id;

              return (
                <div className="bundle-card" key={bundle.id}>
                  {/* Top Badge & Image */}
                  <div className="bundle-card-img-wrap">
                    <span className="bundle-badge-ribbon">{bundle.badge}</span>
                    <img src={getCleanImageUrl(bundle.image)} alt={bundle.name} />
                    <div className="bundle-img-overlay">
                      <span className="bundle-cat-pill">{bundle.category}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bundle-card-body">
                    <div className="bundle-heading-area">
                      <h3>{bundle.name}</h3>
                      <p className="bundle-tagline">{bundle.tagline}</p>
                    </div>

                    {/* Included Items Breakdown */}
                    <div className="included-items-box">
                      <span className="included-label">📦 What's Inside This Bundle:</span>
                      <div className="included-items-list">
                        {details.map((item, iIdx) => (
                          <div className="included-item-row" key={iIdx}>
                            <img
                              src={getCleanImageUrl(item.product.image)}
                              alt={item.product.name}
                              className="included-thumb"
                            />
                            <div className="included-item-info">
                              <strong>
                                {item.quantity}x {item.product.name}
                              </strong>
                              <span className="item-spec">{item.customNote || item.product.category}</span>
                            </div>
                            <span className="item-original-price">
                              Rs. {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="bundle-features-list">
                      {bundle.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <FaCheck className="feat-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing Breakdown & Action */}
                    <div className="bundle-card-footer">
                      <div className="pricing-side">
                        <div className="price-strikethrough-row">
                          <span className="orig-price">
                            Rs. {bundle.originalPrice.toLocaleString()}
                          </span>
                          <span className="savings-pill">
                            Save Rs. {bundle.savings.toLocaleString()} ({bundle.discountPercentage}% OFF)
                          </span>
                        </div>
                        <div className="bundle-final-price">
                          <span className="price-currency">Rs.</span>
                          <strong>{bundle.bundlePrice.toLocaleString()}</strong>
                        </div>
                      </div>

                      <button
                        type="button"
                        className={`btn-add-bundle ${isAdded ? "added" : ""}`}
                        onClick={() => handleAddBundleToCart(bundle)}
                      >
                        {isAdded ? (
                          <>
                            <FaCheck /> Bundle Added to Cart!
                          </>
                        ) : (
                          <>
                            <FaShoppingCart /> Add Entire Bundle to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          INTERACTIVE CUSTOM BUNDLE BUILDER
          ========================================================= */}
      {(selectedCategory === "Custom Builder" || selectedCategory === "All") && (
        <section className="container py-5" id="custom-bundle-builder">
          <div className="custom-builder-card">
            <div className="builder-header">
              <div className="builder-header-left">
                <span className="builder-badge">
                  <FaSlidersH /> BUILD YOUR OWN COMBO
                </span>
                <h2>🎨 Interactive 3-Piece Athlete Bundle Builder</h2>
                <p>
                  Pick 1 primary sports gear item + 1 footwear/apparel + 1 accessory to create your tailored kit. Get an automatic <strong>15% bundle discount</strong> applied instantly!
                </p>
              </div>

              <div className="builder-header-right">
                <div className="discount-callout">
                  <span className="disc-val">15% OFF</span>
                  <span className="disc-lbl">Automatic Bundle Discount</span>
                </div>
              </div>
            </div>

            {/* Step Selection Grid */}
            <div className="builder-steps-grid">
              {/* Step 1: Primary Gear */}
              <div className="builder-step-col">
                <div className="step-col-header">
                  <span className="step-num">STEP 1</span>
                  <h4>Select Primary Gear</h4>
                </div>

                <div className="builder-options-list">
                  {step1Options.map((item) => (
                    <div
                      key={item.id}
                      className={`builder-option-card ${customStep1?.id === item.id ? "selected" : ""}`}
                      onClick={() => setCustomStep1(item)}
                    >
                      <img src={getCleanImageUrl(item.image)} alt={item.name} />
                      <div className="opt-details">
                        <strong>{item.name}</strong>
                        <span className="opt-cat">{item.category}</span>
                        <span className="opt-price">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <div className="opt-radio">
                        {customStep1?.id === item.id && <FaCheck />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Footwear / Apparel */}
              <div className="builder-step-col">
                <div className="step-col-header">
                  <span className="step-num">STEP 2</span>
                  <h4>Select Footwear / Jersey</h4>
                </div>

                <div className="builder-options-list">
                  {step2Options.map((item) => (
                    <div
                      key={item.id}
                      className={`builder-option-card ${customStep2?.id === item.id ? "selected" : ""}`}
                      onClick={() => setCustomStep2(item)}
                    >
                      <img src={getCleanImageUrl(item.image)} alt={item.name} />
                      <div className="opt-details">
                        <strong>{item.name}</strong>
                        <span className="opt-cat">{item.category}</span>
                        <span className="opt-price">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <div className="opt-radio">
                        {customStep2?.id === item.id && <FaCheck />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Ball / Accessory */}
              <div className="builder-step-col">
                <div className="step-col-header">
                  <span className="step-num">STEP 3</span>
                  <h4>Select Accessory / Ball</h4>
                </div>

                <div className="builder-options-list">
                  {step3Options.map((item) => (
                    <div
                      key={item.id}
                      className={`builder-option-card ${customStep3?.id === item.id ? "selected" : ""}`}
                      onClick={() => setCustomStep3(item)}
                    >
                      <img src={getCleanImageUrl(item.image)} alt={item.name} />
                      <div className="opt-details">
                        <strong>{item.name}</strong>
                        <span className="opt-cat">{item.category}</span>
                        <span className="opt-price">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <div className="opt-radio">
                        {customStep3?.id === item.id && <FaCheck />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Bundle Live Summary Bar */}
            <div className="custom-summary-bar">
              <div className="summary-items-preview">
                <span className="summary-title">Your Custom Combo:</span>
                <div className="summary-pills">
                  {customStep1 && <span className="custom-pill">1. {customStep1.name}</span>}
                  {customStep2 && <span className="custom-pill">2. {customStep2.name}</span>}
                  {customStep3 && <span className="custom-pill">3. {customStep3.name}</span>}
                </div>
              </div>

              <div className="summary-pricing-action">
                <div className="summary-price-box">
                  <span className="sum-orig">
                    Individual: Rs. {customCalculations.originalTotal.toLocaleString()}
                  </span>
                  <div className="sum-final-row">
                    <span className="sum-final">
                      Rs. {customCalculations.finalPrice.toLocaleString()}
                    </span>
                    <span className="sum-saved-badge">
                      You Save Rs. {customCalculations.discountAmount.toLocaleString()} (15% OFF)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className={`btn-add-custom-bundle ${customAdded ? "added" : ""}`}
                  onClick={handleAddCustomBundle}
                >
                  {customAdded ? (
                    <>
                      <FaCheck /> Custom Bundle Added!
                    </>
                  ) : (
                    <>
                      <FaShoppingCart /> Add Custom Bundle to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          VALUE GUARANTEE CALLOUT
          ========================================================= */}
      <section className="container pb-5">
        <div className="bundle-guarantee-row">
          <div className="guarantee-item">
            <FaShieldAlt className="g-icon" />
            <div>
              <h4>100% Authentic Match Quality</h4>
              <p>Every item in our bundles is tournament-grade and factory inspected.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <FaPercent className="g-icon" />
            <div>
              <h4>Guaranteed Bundle Savings</h4>
              <p>Save between 15% and 28% compared to buying products separately.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <FaBolt className="g-icon" />
            <div>
              <h4>Fast Delivery Across Pakistan</h4>
              <p>Complete bundles dispatched safely with protective double boxing.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bundles;
