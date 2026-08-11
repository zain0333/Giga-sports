import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      {/* =====================================
          SPORTS HERO / WELCOME SECTION
      ====================================== */}

      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to GIGA SPORTS SHOP</h1>

          <p>
            High quality cricket, football, badminton and fitness equipment.
          </p>

          <a href="/products" className="btn btn-primary shop-button">
            Shop Now
          </a>
        </div>
      </section>

      {/* =====================================
          NAVIGATION BELOW WELCOME SECTION
      ====================================== */}

      <Navbar />

      {/* =====================================
          SPORTS COLLECTION
      ====================================== */}

      <section className="products-intro container">
        <h2>Our Sports Collection</h2>

        <p>Find everything you need for your favorite sports.</p>
      </section>
    </div>
  );
}

export default Home;
