import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to GIGA SPORTS SHOP</h1>

        <p>High quality cricket, football, badminton and fitness equipment.</p>

        <Link to="/products" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
