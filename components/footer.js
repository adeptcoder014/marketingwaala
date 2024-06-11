import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className='flex mb-5'>

            <img
              src={`logo.png`}
              alt="Hero"
              width={35}
              className='mr-4 items-center'
            />
            <div className='flex items-center justify-center'>

              <h2 className="text-2xl font-bold items-center text-gray-900">MarketingWaala</h2>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Subscribe to our weekly newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="p-2 bg-yellow-500 text-white rounded-r-lg">
              &rarr;
            </button>
          </div>
          <p className="mt-4 text-gray-600">Best sales management tool to boost your business.</p>
          <p className="mt-2 text-yellow-500 font-bold">hello@starship.com</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Company</h3>
            <ul className="text-gray-600 space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>We're Hiring</li>
              <li>Press</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Product</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Services</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
