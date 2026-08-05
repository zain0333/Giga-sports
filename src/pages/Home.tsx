import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      {/* Hero Section */}

      <div className="bg-dark text-white p-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to GIGA SPORTS SHOP</h1>

          <p className="lead">
            High quality cricket, football, badminton and fitness equipment.
          </p>

          <Link to="/products" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories */}

      <div className="container mt-5">
        <h2 className="mb-4">Product Categories</h2>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">🏏 Cricket Equipment</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">⚽ Football Equipment</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">🏸 Badminton Equipment</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">💪 Gym Equipment</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">👟 Running Shoes</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3">👕 Sports Clothing</div>
          </div>
        </div>
      </div>

      {/* Featured Products */}

      <div className="container mt-5">
        <h2>Featured Products</h2>

        <div className="row mt-4">
          {products.slice(0, 3).map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
