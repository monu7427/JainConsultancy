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
              At SubStream, our mission is to provide affordable and high-quality OTT subscriptions with 24×7 customer support. We believe in making entertainment accessible to everyone, ensuring that you can enjoy your favorite shows and movies without breaking the bank.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a range of services to meet your needs:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Affordable OTT subscriptions</li>
              <li>24×7 customer support</li>
              <li>Personalized recommendations</li>
              <li>Easy subscription management</li>
              <li>Special offers and discounts</li>
              <li>Income tax filing services</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Income Tax Filing Services</h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to our OTT subscription services, we also offer professional income tax filing services. Our team of experts ensures that your tax filings are accurate and timely, helping you avoid any legal issues and maximize your tax benefits.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Expert advice and consultation</li>
              <li>Accurate and timely filing</li>
              <li>Maximize your tax benefits</li>
              <li>Affordable rates</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team is dedicated to providing you with the best service possible. We are a group of passionate professionals who are always ready to help you with your entertainment and tax filing needs.
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
