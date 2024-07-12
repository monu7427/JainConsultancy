import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-opacity-25" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')`, minHeight: '300px' }}>
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="container mx-auto relative py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-white mb-4">Jain Consultancy</h2>
          <div className="text-center mb-4">
            <p className="text-slate-400">Sanghpura Purani Tonk, Tonk Rajasthan 304001</p>
            <p className="text-slate-400">Phone: +91 9414646365</p>
            <p className="text-slate-400">Email: jain.consultancy92@gmail.com</p>
          </div>
          <p className="text-white text-center mb-4 max-w-prose">We are committed to providing our clients with the best quality services in the market.</p>
          <div className="flex space-x-4">
            <NavLink to="/privacy-policy" className="text-sky-500 hover:underline">Privacy Policy</NavLink>
            <NavLink to="/terms-condition" className="text-sky-500 hover:underline">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
