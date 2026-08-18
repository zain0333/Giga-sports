import React, { useMemo, useState } from "react";
import { FaRobot, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./AISportsAssistant.css";

const AISportsAssistant: React.FC = () => {
  const { addToCart } = useCart();

  const [sport, setSport] = useState("");
  const [budget, setBudget] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [showResults, setShowResults] = useState(false);

  const recommendedProducts = useMemo(() => {
    if (!sport || !budget || !age || !level) {
      return [];
    }

    const budgetNumber = Number(budget);
    const ageNumber = Number(age);

    let filtered = products.filter((product) => {
      const productCategory = product.category.toLowerCase();
      const selectedSport = sport.toLowerCase();

      const sportMatches =
        selectedSport === "all" || productCategory.includes(selectedSport);

      const priceMatches = product.price <= budgetNumber;

      return sportMatches && priceMatches;
    });

    // If there are no products in the selected sport/budget,
    // show affordable products instead of an empty result.
    if (filtered.length === 0) {
      filtered = products.filter((product) => product.price <= budgetNumber);
    }

    // Give a small preference based on age and experience.
    // This keeps the feature working even if your products
    // don't have age/level fields.
    if (ageNumber < 13) {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (level === "beginner") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (level === "professional") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered.slice(0, 4);
  }, [sport, budget, age, level]);

  const handleRecommendation = () => {
    if (!sport || !budget || !age || !level) {
      alert("Please complete all fields first.");
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

  return (
    <section className="ai-assistant-section">
      <div className="ai-assistant-container">
        {/* Header */}
        <div className="ai-assistant-header">
          <div className="ai-assistant-icon">
            <FaRobot />
          </div>

          <div>
            <span className="ai-assistant-label">SMART SHOPPING</span>

            <h2>GIGA Sports Assistant</h2>

            <p>
              Find the right sports equipment based on your sport, budget, age
              and experience.
            </p>
          </div>
        </div>

        {/* Form */}
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
                <option value="Gym">🏋️ Gym / Fitness</option>
                <option value="Running">👟 Running</option>
                <option value="Clothing">👕 Sports Clothing</option>
                <option value="all">🌟 All Sports</option>
              </select>
            </div>

            {/* Budget */}
            <div className="ai-form-group">
              <label htmlFor="ai-budget">💰 What's your maximum budget?</label>

              <input
                id="ai-budget"
                type="number"
                min="0"
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
            <button className="ai-find-button" onClick={handleRecommendation}>
              <FaSearch />
              Find My Products
            </button>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div className="ai-results">
            <div className="ai-results-top">
              <div>
                <span>YOUR PERSONALIZED PICKS</span>
                <h3>We found these products for you 🎯</h3>
              </div>

              <button
                className="ai-reset-button"
                onClick={resetAssistant}
                title="Start again"
              >
                <FaTimes />
                Start Again
              </button>
            </div>

            {recommendedProducts.length > 0 ? (
              <div className="ai-products-grid">
                {recommendedProducts.map((product) => (
                  <div className="ai-product-card" key={product.id}>
                    <div className="ai-product-image">
                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="ai-product-content">
                      <span className="ai-product-category">
                        {product.category}
                      </span>

                      <h4>{product.name}</h4>

                      <div className="ai-product-price">
                        Rs. {product.price.toLocaleString()}
                      </div>

                      <button
                        className="ai-cart-button"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ai-no-results">
                <FaRobot />
                <h3>No exact products found</h3>
                <p>Try increasing your budget or selecting "All Sports".</p>

                <button className="ai-find-button" onClick={resetAssistant}>
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
