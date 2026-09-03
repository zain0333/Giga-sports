import React, { useMemo, useState, useCallback } from "react";
import {
  FaRobot,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import { products } from "../data/products";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import "./AISportsAssistant.css";

const AISportsAssistant: React.FC = () => {
  const { addToCart } = useCart();

  const [sport, setSport] = useState("");
  const [budget, setBudget] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");

  const [showResults, setShowResults] = useState(false);

  const getCleanImageUrl = (image: string): string => {
    if (!image) {
      return "";
    }

    // Handles Markdown format:
    // [https://example.com/image.jpg](https://example.com/image.jpg)
    const markdownMatch = image.match(/\]\((.*?)\)/);

    if (markdownMatch && markdownMatch[1]) {
      return markdownMatch[1];
    }

    // Handles normal URLs
    return image;
  };

  const getSportMatches = useCallback((product: Product): boolean => {
    const category = product.category.toLowerCase();

    switch (sport) {
      case "Cricket":
        return category.includes("cricket");

      case "Football":
        return category.includes("football");

      case "Badminton":
        return category.includes("badminton");

      case "Gym Equipment":
        return category.includes("gym");

      case "Running":
        return category.includes("running");

      case "Sports Clothing":
        return category.includes("clothing");

      case "Sports Accessories":
        return (
          category.includes("accessories") ||
          category.includes("bags") ||
          category.includes("eyewear")
        );

      case "all":
        return true;

      default:
        return false;
    }
  }, [sport]);

  const recommendedProducts = useMemo(() => {
    if (!sport || !budget || !age || !level) {
      return [];
    }

    const maxBudget = Number(budget);
    const userAge = Number(age);

    let matches = products.filter((product) => {
      const sportMatch = getSportMatches(product);
      const budgetMatch = product.price <= maxBudget;

      return sportMatch && budgetMatch;
    });

    /*
      If no product exactly matches both sport and budget,
      show affordable products from all categories.
    */
    if (matches.length === 0) {
      matches = products.filter((product) => product.price <= maxBudget);
    }

    /*
      Recommendation scoring
    */
    const scoredProducts = matches.map((product) => {
      let score = 0;

      // Rating
      if (product.rating) {
        score += product.rating * 10;
      }

      // Reviews
      if (product.reviews) {
        score += Math.min(product.reviews, 50);
      }

      // Stock availability
      if (product.stock && product.stock > 0) {
        score += 10;
      }

      // Beginner users get lower-priced products
      if (level === "beginner") {
        if (product.price <= maxBudget * 0.6) {
          score += 20;
        }
      }

      // Intermediate users get balanced products
      if (level === "intermediate") {
        if (product.price <= maxBudget * 0.85) {
          score += 15;
        }
      }

      // Professionals get higher-end products
      if (level === "professional") {
        if (product.price >= maxBudget * 0.6) {
          score += 20;
        }
      }

      // Younger users get preference for affordable products
      if (userAge < 13) {
        if (product.price <= maxBudget * 0.5) {
          score += 15;
        }
      }

      return {
        product,
        score,
      };
    });

    scoredProducts.sort((a, b) => b.score - a.score);

    return scoredProducts.slice(0, 4).map((item) => item.product);
  }, [sport, budget, age, level, getSportMatches]);

  const handleRecommendation = () => {
    if (!sport || !budget || !age || !level) {
      alert("Please complete all fields first.");
      return;
    }

    if (Number(budget) <= 0) {
      alert("Please enter a valid budget.");
      return;
    }

    if (Number(age) <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    setShowResults(true);
  };

  const resetAssistant = () => {
    setSport("");
    setBudget("");
    setAge("");
    setLevel("");
    setShowResults(false);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <section className="ai-assistant-section">
      <div className="ai-assistant-container">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="ai-assistant-header">
          <div className="ai-assistant-icon">
            <FaRobot />
          </div>

          <div>
            <span className="ai-assistant-label">
              SMART SPORTS RECOMMENDATION
            </span>

            <h2>GIGA Sports Assistant</h2>

            <p>
              Tell us about yourself and we'll help you find the right sports
              equipment.
            </p>
          </div>
        </div>

        {/* =====================================================
            QUESTIONS
        ====================================================== */}
        {!showResults && (
          <div className="ai-assistant-form">
            {/* Sport */}
            <div className="ai-form-group">
              <label htmlFor="ai-sport">🏆 What sport do you play?</label>

              <select
                id="ai-sport"
                value={sport}
                onChange={(e) => setSport(e.target.value)}
              >
                <option value="">Select your sport</option>

                <option value="Cricket">🏏 Cricket</option>

                <option value="Football">⚽ Football</option>

                <option value="Badminton">🏸 Badminton</option>

                <option value="Gym Equipment">🏋️ Gym / Fitness</option>

                <option value="Running">👟 Running</option>

                <option value="Sports Clothing">👕 Sports Clothing</option>

                <option value="Sports Accessories">🎒 Accessories</option>

                <option value="all">🌟 All Sports</option>
              </select>
            </div>

            {/* Budget */}
            <div className="ai-form-group">
              <label htmlFor="ai-budget">💰 What's your maximum budget?</label>

              <input
                id="ai-budget"
                type="number"
                min="1"
                placeholder="Example: 10000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />

              <small>Enter your budget in PKR</small>
            </div>

            {/* Age */}
            <div className="ai-form-group">
              <label htmlFor="ai-age">🎂 How old are you?</label>

              <input
                id="ai-age"
                type="number"
                min="5"
                max="100"
                placeholder="Example: 18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Level */}
            <div className="ai-form-group">
              <label htmlFor="ai-level">🎯 What's your experience level?</label>

              <select
                id="ai-level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Select experience</option>

                <option value="beginner">🌱 Beginner</option>

                <option value="intermediate">⭐ Intermediate</option>

                <option value="professional">🏆 Professional</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="button"
              className="ai-find-button"
              onClick={handleRecommendation}
            >
              <FaSearch />
              Find My Products
            </button>
          </div>
        )}

        {/* =====================================================
            RESULTS
        ====================================================== */}
        {showResults && (
          <div className="ai-results">
            <div className="ai-results-top">
              <div>
                <span>PERSONALIZED RECOMMENDATIONS</span>

                <h3>Your Recommended Sports Gear 🎯</h3>
              </div>

              <button
                type="button"
                className="ai-reset-button"
                onClick={resetAssistant}
              >
                <FaTimes />
                Start Again
              </button>
            </div>

            {/* Recommendation summary */}
            <div className="ai-summary">
              <div>
                <strong>Sport</strong>
                <span>{sport === "all" ? "All Sports" : sport}</span>
              </div>

              <div>
                <strong>Budget</strong>
                <span>Rs. {Number(budget).toLocaleString()}</span>
              </div>

              <div>
                <strong>Age</strong>
                <span>{age} years</span>
              </div>

              <div>
                <strong>Level</strong>
                <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
              </div>
            </div>

            {/* Products */}
            {recommendedProducts.length > 0 ? (
              <div className="ai-products-grid">
                {recommendedProducts.map((product) => (
                  <div className="ai-product-card" key={product.id}>
                    {/* Image */}
                    <div className="ai-product-image">
                      {product.badge && (
                        <span className="ai-product-badge">
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={getCleanImageUrl(product.image)}
                        alt={product.name}
                        onError={handleImageError}
                      />
                    </div>

                    {/* Content */}
                    <div className="ai-product-content">
                      <span className="ai-product-category">
                        {product.category}
                      </span>

                      <h4>{product.name}</h4>

                      {/* Rating */}
                      {product.rating && (
                        <div className="ai-rating">
                          <FaStar />

                          <strong>{product.rating}</strong>

                          <span>({product.reviews || 0})</span>
                        </div>
                      )}

                      {/* Price */}
                      <div className="ai-product-price">
                        Rs. {product.price.toLocaleString()}
                      </div>

                      {/* Stock */}
                      {product.stock !== undefined && (
                        <div className="ai-stock">
                          {product.stock > 0 ? (
                            <>
                              <FaCheckCircle />
                              {product.stock <= 5
                                ? `Only ${product.stock} left`
                                : "In Stock"}
                            </>
                          ) : (
                            <>Out of Stock</>
                          )}
                        </div>
                      )}

                      {/* Add Cart */}
                      <button
                        type="button"
                        className="ai-cart-button"
                        disabled={product.stock === 0}
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart />

                        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ai-no-results">
                <FaRobot />

                <h3>We couldn't find a suitable product</h3>

                <p>Try increasing your budget or selecting All Sports.</p>

                <button
                  type="button"
                  className="ai-find-button"
                  onClick={resetAssistant}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AISportsAssistant;
