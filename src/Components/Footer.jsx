import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react"; // Using Phosphor icons here (install with `npm install phosphor-react`)

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-500">
            Rwempango Group
          </h3>
          <p className="text-sm">
            A diversified group empowering communities through real estate,
            finance, and agriculture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h4>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@rwempango.com"
                className="hover:text-yellow-500"
              >
                info@rwempango.com
              </a>
            </li>
            <li>Phone: +256 700 000 000</li>
            <li>Location: Kampala, Uganda</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/rwempango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500"
            >
              <FacebookLogo size={28} />
            </a>
            <a
              href="https://twitter.com/rwempango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-500"
            >
              <TwitterLogo size={28} />
            </a>
            <a
              href="https://linkedin.com/company/rwempango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-500"
            >
              <LinkedinLogo size={28} />
            </a>
            <a
              href="https://instagram.com/rwempango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-500"
            >
              <InstagramLogo size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Rwempango Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
