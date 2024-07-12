import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Privacy Policy
        </h2>
        <div className="mt-8 text-left">
          <p className="text-lg leading-7 text-gray-500">
            We respect your privacy and are committed to protecting any information
            you share with us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit the Jain Consultancy website.
            Please read this policy carefully.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">1. Information We Collect</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We collect information that you provide directly to us, such as when you
            fill out a contact form, request a service, or sign up for our newsletter.
            This may include your name, email address, phone number, and any other
            information you choose to provide.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">2. How We Use Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            The information we collect may be used to:
            <ul className="list-disc list-inside">
              <li>Communicate with you about our services</li>
              <li>Process your requests and transactions</li>
              <li>Improve our website and services</li>
              <li>Personalize your experience on our website</li>
              <li>Send you updates and promotional materials</li>
            </ul>
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">3. Sharing Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We do not sell, trade, or otherwise transfer your personally identifiable
            information to outside parties without your consent, except as necessary
            to provide you with our services or comply with legal obligations.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">4. Security of Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We implement security measures to protect your information from unauthorized
            access, alteration, disclosure, or destruction. However, please be aware
            that no method of transmission over the Internet or method of electronic
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">5. Changes to This Privacy Policy</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We may update our Privacy Policy from time to time to reflect changes in
            our practices or for other operational, legal, or regulatory reasons.
            We will notify you of any changes by posting the new policy on this page.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">6. Contact Us</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            If you have any questions about this Privacy Policy, please contact us at
            <a href="mailto:jain.consultancy92@gmail.com" className="text-indigo-600"> jain.consultancy92@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
