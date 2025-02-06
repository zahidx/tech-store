"use client";

import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Navbar component
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist dark mode preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-gray-800 dark:bg-[#0E1628] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Tech Store</h1>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/cart" className="text-white hover:text-gray-200 flex items-center">
            <i className="fas fa-cart-shopping mr-2"></i> {/* Cart Icon */}
  
          </a>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-white text-2xl hover:text-gray-200"
          >
            {isDarkMode ? (
              <i className="fas fa-sun"></i> // Sun icon for Light Mode
            ) : (
              <i className="fas fa-moon"></i> // Moon icon for Dark Mode
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
