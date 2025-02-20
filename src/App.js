import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import CategoryFilter from "./Components/CategoryFilter";
import productsData from "./Data/products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 className="text-center mt-4">Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <CategoryFilter
        categories={["All", "Tops", "churidar","Saree", "Lehanga", "Gown"]}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
