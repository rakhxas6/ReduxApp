// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-10 mt-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p>
            We are dedicated to providing the best services and resources to
            help you excel in your endeavors.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg mb-4 text-gray-800"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} Redux Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
