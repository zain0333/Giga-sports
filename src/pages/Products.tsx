function Products() {
  const categories = [
    "🏏 Cricket Equipment",
    "⚽ Football Equipment",
    "🏸 Badminton Equipment",
    "💪 Gym Equipment",
    "👟 Running Shoes",
    "👕 Sports Clothing",
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Our Products</h1>

      <p>Explore high quality sports products at GIGA SPORTS SHOP.</p>

      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card shadow p-3">
              <h4>{category}</h4>

              <p>Premium quality products for athletes and sports lovers.</p>

              <button className="btn btn-primary">View Products</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
