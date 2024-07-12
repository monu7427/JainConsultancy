import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
    <nav className="bg-sky-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <h2 className="text-sm md:text-2xl">Jain Consultancy</h2>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        <ul
          ref={mobileMenuRef}
          className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:block w-full md:w-auto`}
        >
          <li className="text-center">
            <NavLink exact to="/" className="hover:underline block md:inline" activeClassName="font-bold">
              Home
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/about" className="hover:underline block md:inline" activeClassName="font-bold">
              About Us
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/services" className="hover:underline block md:inline" activeClassName="font-bold">
              Services
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/contact" className="hover:underline block md:inline" activeClassName="font-bold">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
