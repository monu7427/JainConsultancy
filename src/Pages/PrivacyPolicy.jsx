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
            disclose, and safeguard your information when you visit our website.
            Please read this policy carefully.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">1. Information We Collect</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We collect information that you provide directly to us, such as when you
            fill out a contact form or sign up for our newsletter.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">2. How We Use Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            The information we collect may be used to communicate with you, improve
            our services, and personalize your experience on our website.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">3. Sharing Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We do not sell, trade, or otherwise transfer your personally identifiable
            information to outside parties without your consent.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">4. Security of Your Information</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We implement security measures to protect your information from unauthorized
            access, alteration, disclosure, or destruction.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">5. Changes to This Privacy Policy</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            We may update our Privacy Policy from time to time. We will notify you of
            any changes by posting the new policy on this page.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">6. Contact Us</h3>
          <p className="mt-4 text-base leading-6 text-gray-500">
            If you have any questions about this Privacy Policy, please contact us at
            <span className="text-indigo-600"> privacy@example.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
