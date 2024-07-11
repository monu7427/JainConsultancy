import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline'; // Import icons from Heroicons

const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Have any questions or inquiries? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div className="mt-8 text-left">
          <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
          <ul className="mt-4 divide-y divide-gray-200">
            <li className="py-2 flex items-center">
              <MailIcon className="h-6 w-6 text-gray-600 mr-3" />
              <span className="text-gray-700">jain.consultancy92@gmail.com</span>
            </li>
            <li className="py-2 flex items-center">
              <PhoneIcon className="h-6 w-6 text-gray-600 mr-3" />
              <span className="text-gray-700">+91 9414646365</span>
            </li>
            <li className="py-2 flex items-center">
              <LocationMarkerIcon className="h-6 w-6 text-gray-600 mr-3" />
              <span className="text-gray-700">Sanghpura Purani Tonk ,Tonk Rajasthan 304001 </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="query" className="block text-sm font-medium text-gray-700">
              Query
            </label>
            <div className="mt-1">
              <textarea
                id="query"
                name="query"
                rows="4"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
