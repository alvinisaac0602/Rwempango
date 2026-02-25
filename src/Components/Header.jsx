import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure this package is installed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a
          href="/"
          className="text-xl font-bold text-yellow-600 hover:underline"
        >
          Rwempango Group
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-yellow-600">
            Home
          </a>
          <a href="/realestate" className="hover:text-yellow-600">
            Real Estate
          </a>
          <a href="/finance" className="hover:text-yellow-600">
            Financial Services
          </a>
          <a href="/agricproducts" className="hover:text-yellow-600">
            Agricultural Products
          </a>
          <a href="/contact" className="hover:text-yellow-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 space-y-3">
          <a href="/" className="block text-gray-700 hover:text-yellow-600">
            Home
          </a>
          <a
            href="/realestate"
            className="block text-gray-700 hover:text-yellow-600"
          >
            Real Estate
          </a>
          <a
            href="/finance"
            className="block text-gray-700 hover:text-yellow-600"
          >
            Financial Services
          </a>
          <a
            href="/agricproducts"
            className="block text-gray-700 hover:text-yellow-600"
          >
            Agricultural Products
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-yellow-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
