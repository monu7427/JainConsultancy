import React, { useState } from 'react';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or perform validation
    console.log('Form submitted with:', { name, email, number, query });
    // Optionally clear inputs after submission
    setName('');
    setEmail('');
    setNumber('');
    setQuery('');
  };

  return (
    <div className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Jain Consultancy</h1>
        <p className="text-lg mb-8">Explore our services and get in touch with us!</p>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
          <div className="w-full  md:w-1/2 md:p-2">
            <input
              type="text"
              className="w-full  mt-2 p-2 rounded-md bg-white text-sky-600 focus:outline-none"
              placeholder="Name"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
              required
            />
          </div>
          <div className="w-full mt-2 md:w-1/2 md:p-2">
            <input
              type="email"
              className="w-full p-2 rounded-md bg-white text-sky-600 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              required
            />
          </div>
          <div className="w-full mt-2 md:w-1/2 md:p-2">
            <input
              type="tel"
              className="w-full p-2 rounded-md bg-white text-sky-600 focus:outline-none"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => handleInputChange(e, setNumber)}
              required
            />
          </div>
          <div className="w-full mt-2 md:w-1/2 md:p-2">
            <input
              type="text"
              className="w-full p-2 rounded-md bg-white text-sky-600 focus:outline-none"
              placeholder="Your Query"
              value={query}
              onChange={(e) => handleInputChange(e, setQuery)}
              required
            />
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              className="bg-white text-sky-600 py-2 px-6 rounded-md hover:bg-sky-100 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
