import React from 'react';
import LearnMoreButton from './button';

const AboutSection = () => {
  return (
    <section className="py-12 bg-white mt-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div className="md:w-1/2 lg:w-1/2 flex flex-col items-start justify-start p-4 md:p-10">
            <div
              className="mb-4 bg-yellow-500 p-2 rounded-full"
            >
              <p className="text-gray-800 font-bold text-sm">OUR SERVICE</p>
            </div>
            <h2 className="text-[#4b5563]  text-4xl md:text-6xl font-bold mb-4 w-full md:w-3/4">
              Grow with a digital marketing agency
            </h2>
            <p className="text-gray-700 mb-6 w-full md:w-3/4">
              Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads.
            </p>
            <LearnMoreButton />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 mt-6 md:mt-0 p-4 md:p-10">
            <img src="hero1.png" alt="Service Image" className="rounded-lg shadow-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
