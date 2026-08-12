import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

import "./Products.css";

function Products() {
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  // Filter products when a category is selected
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products.filter(
      (product) =>
        product.category?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [selectedCategory]);

  return (
    <main className="giga-products-page">
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <section className="products-header">
        <div className="products-header-inner">
          <span className="products-eyebrow">GIGA SPORTS</span>

          <h1>{selectedCategory ? selectedCategory : "Our Products"}</h1>

          <p>Discover premium sports equipment designed for every game.</p>
        </div>
      </section>

      {/* =========================================
          CATEGORY NAVIGATION
      ========================================= */}

      <section className="products-category-bar">
        <div className="products-category-inner">
          <Link
            to="/products"
            className={
              !selectedCategory ? "category-filter active" : "category-filter"
            }
          >
            All
          </Link>

          <Link
            to="/products?category=Cricket"
            className={
              selectedCategory?.toLowerCase() === "cricket"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Cricket
          </Link>

          <Link
            to="/products?category=Football"
            className={
              selectedCategory?.toLowerCase() === "football"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Football
          </Link>

          <Link
            to="/products?category=Badminton"
            className={
              selectedCategory?.toLowerCase() === "badminton"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Badminton
          </Link>

          <Link
            to="/products?category=Gym Equipment"
            className={
              selectedCategory?.toLowerCase() === "gym equipment"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Gym Equipment
          </Link>

          <Link
            to="/products?category=Running"
            className={
              selectedCategory?.toLowerCase() === "running"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Running
          </Link>

          <Link
            to="/products?category=Sports Clothing"
            className={
              selectedCategory?.toLowerCase() === "sports clothing"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Sports Wear
          </Link>

          <Link
            to="/products?category=Sports Bags"
            className={
              selectedCategory?.toLowerCase() === "sports bags"
                ? "category-filter active"
                : "category-filter"
            }
          >
            Sports Bags
          </Link>
        </div>
      </section>

      {/* =========================================
          PRODUCT AREA
      ========================================= */}

      <section className="products-showcase">
        <div className="products-top-row">
          <div>
            <span className="products-result-title">
              {selectedCategory
                ? `${selectedCategory} Collection`
                : "All Sports Collection"}
            </span>
          </div>

          <span className="products-count">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        {filteredProducts.length > 0 ? (
          <div className="giga-product-grid">
            {filteredProducts.map((product) => (
              <div className="giga-product-item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="products-empty">
            <h2>No Products Found</h2>

            <p>There are no products available in this category yet.</p>

            <Link to="/products" className="view-all-products">
              View All Products
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
