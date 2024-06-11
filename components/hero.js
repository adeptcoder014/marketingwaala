import React from 'react';

const HeroSection = () => {
  return (
    <div className="shadow-md relative bg-white overflow-hidden" style={{
      borderRadius: '0px'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div 
            className="mb-4 bg-yellow-500"
            style={{
              width:'fit-content',
              padding:'5px',
              borderRadius:'15px'
            }}
            >
              <span className="text-gray font-bold">OUR SERVICE</span>
            </div>
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Grow </span>
                <span className="block text-indigo-600 xl:inline text-main-grd">faster</span>
                <span className="block xl:inline"> with our all-in-one marketing platform</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We aren't your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div
                style={{
                  width:'fit-content',
                  padding:'5px',
                  borderRadius:'15px'
                }}
                className="rounded-md shadow bg-gray-500">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="hero.png"
          alt="Hero"
        />
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
          <div className="flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-900 font-semibold">Congrats!</p>
              <p className="text-green-600">$12.5</p>
              <p className="text-gray-500 text-sm">16 hours ago</p>
              <p className="text-gray-500 text-sm">1x Gymnocalycium mihanovichii ..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
