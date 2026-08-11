import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-page">
      <h1>Sports Categories</h1>

      <div className="categories-container">
        <Link to="/products" className="category-card">
          <h2>🏏 Cricket</h2>
          <p>Cricket bats, balls, gloves and equipment.</p>
        </Link>

        <Link to="/products" className="category-card">
          <h2>⚽ Football</h2>
          <p>Football, shoes and football equipment.</p>
        </Link>

        <Link to="/products" className="category-card">
          <h2>🏸 Badminton</h2>
          <p>Rackets, shuttlecocks and badminton equipment.</p>
        </Link>

        <Link to="/products" className="category-card">
          <h2>🏋️ Fitness</h2>
          <p>Gym and fitness equipment.</p>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
