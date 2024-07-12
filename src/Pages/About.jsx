import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-900 py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-600 mb-8">About Us</h1>
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At Jain Consultancy, our mission is to provide comprehensive and reliable services in Income Tax Return Filing, GST Return, and Company Incorporation. We are dedicated to ensuring that our clients receive accurate, timely, and affordable solutions to meet their financial and regulatory needs.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a range of services to meet your needs:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Income Tax Return Filing</li>
              <li>GST Return</li>
              <li>Company Incorporation</li>
              <li>Expert Consultation</li>
              <li>Personalized Financial Advice</li>
              <li>Affordable and Transparent Pricing</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Income Tax Filing Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our professional income tax filing services ensure that your tax filings are accurate and timely. Our team of experts helps you avoid any legal issues and maximize your tax benefits. We handle all aspects of tax filing so you can focus on your business.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Expert advice and consultation</li>
              <li>Accurate and timely filing</li>
              <li>Maximize your tax benefits</li>
              <li>Affordable rates</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">GST Return Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our GST return services help you stay compliant with the latest regulations. We ensure that your GST returns are filed accurately and on time, minimizing any risk of penalties or legal issues. Let us handle the complexities of GST so you can focus on growing your business.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Accurate GST return filing</li>
              <li>Compliance with latest regulations</li>
              <li>Risk minimization</li>
              <li>Expert guidance</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Company Incorporation Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Starting a new company? Our incorporation services make it easy and hassle-free. We assist with all the necessary legal documentation and compliance requirements, ensuring a smooth and efficient incorporation process.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Legal documentation assistance</li>
              <li>Compliance with regulatory requirements</li>
              <li>Streamlined incorporation process</li>
              <li>Expert advice and support</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team is dedicated to providing you with the best service possible. We are a group of passionate professionals who are always ready to help you with your tax filing, GST return, and company incorporation needs.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Contact us today to learn more about how we can serve you!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
