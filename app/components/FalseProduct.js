"use client";

import React, { useState, useEffect } from "react";

const FalseProduct = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories on initial render
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(["all", ...data]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on the selected category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-red-100">
        <div className="text-lg font-semibold text-red-600">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Category-Based Products</h1>
          <p className="text-sm mt-2">
            Browse products by your favorite category.
          </p>
        </div>
      </header>

      {/* Category Selector */}
      <section className="container mx-auto py-6">
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white transition`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto py-8">
        {loading ? (
          <div className="flex justify-center">
            <div className="text-lg font-semibold text-gray-700">Loading...</div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {product.category}
                  </p>
                  <p className="text-gray-900 dark:text-gray-200 font-bold mt-2">
                    ${product.price}
                  </p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      
    </div>
  );
};

export default FalseProduct;
