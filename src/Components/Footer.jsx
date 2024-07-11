import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-opacity-25" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')`, minHeight: '300px' }}>
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="container mx-auto relative py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <div className="text-center mb-4">
            <p className="text-slate-400">123 Street Name, City, Country</p>
            <p className="text-slate-400">Phone: +123 456 789</p>
            <p className="text-slate-400">Email: info@example.com</p>
          </div>
          <p className="text-white text-center mb-4 max-w-prose">We are committed to providing our clients with the best quality services in the market.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sky-500 hover:underline">Privacy Policy</a>
            <a href="#" className="text-sky-500 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
