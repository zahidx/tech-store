"use client";
import React from "react";

const ScrollingHeadline = () => {
  return (
    <div className="bg-blue-500 dark:bg-gray-900 text-black dark:text-white">
      {/* Scrolling Headline Section */}
      <div className="bg-blue-500 dark:bg-gray-800 py-2">
        <div className="overflow-hidden">
          <p className="whitespace-nowrap text-center text-lg dark:text-gray-300 animate-marquee">
            Breaking News: Latest tech gadgets available now! Grab them before
            they're gone! Shop for phones, laptops, accessories, and more! Don't
            miss out on amazing discounts and offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollingHeadline;
