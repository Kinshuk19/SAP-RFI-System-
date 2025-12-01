import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://www.sap.com/content/dam/application/shared/logos/sap-logo-svg.svg"
                alt="SAP Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">RFI System</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Streamline your procurement process with our intelligent RFI system. 
              Pre-qualify suppliers, save time, and make data-driven decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Email: support@sap-rfi.com</span>
              </li>
              <li>
                <span className="text-gray-400">Phone: +1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SAP RFI System. All rights reserved. | 
            <span className="font-semibold text-blue-400 ml-2">
              Empowering procurement excellence
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;