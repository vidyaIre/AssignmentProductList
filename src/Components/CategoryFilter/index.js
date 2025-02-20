import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onFilterChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Filter by Category:</label>
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;