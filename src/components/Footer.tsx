
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
            <p className="text-gray-600">
              Give & Go Goodies connects generous donors with people in need, 
              charging only for logistics to make sure items find new homes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-600 hover:text-primary-800">Home</Link></li>
              <li><Link to="/donate" className="text-primary-600 hover:text-primary-800">Donate Items</Link></li>
              <li><Link to="/items" className="text-primary-600 hover:text-primary-800">Browse Items</Link></li>
              <li><Link to="/how-it-works" className="text-primary-600 hover:text-primary-800">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: help@giveandgogoodies.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Giving Street, Charity Town
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Give & Go Goodies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
