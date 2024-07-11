import React from 'react';
import { FiFileText, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const serviceData = [
  {
    icon: <FiFileText className="h-12 w-12 text-indigo-600" />,
    title: 'Income Tax Return Filing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FiDollarSign className="h-12 w-12 text-indigo-600" />,
    title: 'GST Return',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FiBriefcase className="h-12 w-12 text-indigo-600" />,
    title: 'Company Incorporation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          We offer a range of professional services to meet your needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
        {serviceData.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-4">
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 px-5">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
