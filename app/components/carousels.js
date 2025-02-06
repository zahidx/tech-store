"use client";

import Image from "next/image";
import Laptop from "../images/laptop.jpg";
import Phone from "../images/phone.png";
import Watch from "../images/watch.jpg";
import Headphones from "../images/headphone.png";

import React, { useState, useEffect } from "react";

const Carousel = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "Latest model with high performance.",
      price: "$799",
      image: Phone,
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful laptop for work and play.",
      price: "$1299",
      image: Laptop,
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track your health and stay connected.",
      price: "$199",
      image: Watch,
    },
    {
      id: 4,
      name: "Headphones",
      description: "High-quality sound and noise cancellation.",
      price: "$299",
      image: Headphones,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality (Change slide every 3 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" dark:bg-gray-900">
      {/* Carousel Section */}
      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Featured Products
        </h3>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Slide */}
          <div className=" dark:bg-gray-800  rounded-lg overflow-hidden transition-all duration-500 transform w-full sm:w-1/2 mx-auto">
            {/* Image Wrapper */}
            <div className="relative w-full h-64 sm:h-72 md:h-96">
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                layout="fill"
                objectFit="contain"
                priority={true}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {products[currentIndex].name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {products[currentIndex].description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {products[currentIndex].price}
                </span>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-gray-800 text-white py-3 px-4 rounded-full hover:bg-gray-700 transition duration-200 shadow-lg"
            >
              &#10094;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-gray-800 text-white py-3 px-4 rounded-full hover:bg-gray-700 transition duration-200 shadow-lg"
            >
              &#10095;
            </button>
          </div>

          {/* Dots for Slide Navigation */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center py-4 space-x-2">
            {products.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
