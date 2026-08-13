import { Link } from "react-router-dom";
import FlashSale from "../components/FlashSale";
import Statistics from "../components/Statistics";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GIGA SPORTS SHOP</h1>

          <p>
            High quality cricket, football, badminton and fitness equipment.
          </p>

          <Link to="/products" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Flash Sale */}
      <FlashSale />

      {/* Animated Statistics */}
      <Statistics />

      {/* Featured Products */}
      <section className="container my-5">
        <div className="text-center mb-4">
          <h2>Featured Products</h2>

          <p className="text-muted">Check out our latest sports products</p>
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-6 col-lg-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
