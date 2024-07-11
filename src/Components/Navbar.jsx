import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Close mobile menu when clicking outside
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-sky-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <h2 className="text-2xl">Jain Consultancy</h2>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        <ul
          ref={mobileMenuRef}
          className={`md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}
        >
          <li>
            <a href="#" className="hover:underline block md:inline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block md:inline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block md:inline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block md:inline">
              Publication
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline block md:inline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
