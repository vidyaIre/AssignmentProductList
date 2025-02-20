import React from "react";
import ProductCard from "../ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;