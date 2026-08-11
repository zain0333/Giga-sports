function Categories() {
  return (
    <div className="categories-page">
      <h1>Sports Categories</h1>

      <div className="categories-container">
        <div className="category-card">
          <h2>🏏 Cricket</h2>
          <p>Bats, balls, gloves and cricket equipment.</p>
        </div>

        <div className="category-card">
          <h2>⚽ Football</h2>
          <p>Football, shoes and football equipment.</p>
        </div>

        <div className="category-card">
          <h2>🏸 Badminton</h2>
          <p>Rackets, shuttlecocks and badminton equipment.</p>
        </div>

        <div className="category-card">
          <h2>🏋️ Fitness</h2>
          <p>Gym and fitness equipment for your workouts.</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
