import React from 'react';
import Tag from './tag';
import LearnMoreButton from './button';

const HeroSection = ({
  title,
  description,
  image,
  color,
  tagContent,
  tagColor
}) => {
  return (
    <div
      className={`shadow-md flex flex-col md:flex-row p-4 sm:p-1    ${color} rounded-md`}
    // style={{
    //   borderRadius: '0px'
    // }}
    >
      {/* <div className="max-w-7xl bg-[#baff1b] mx-auto"> */}
      {/* <div className="relative z-10 pb-8 bg-[yellow] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"> */}
      <main className="align-middle m-auto">

        <div className={`lg:p-24 ${color}`}>
          <Tag
            tag={tagContent}
            color={tagColor}

          />
          <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>

          <p className="mt-3 text-base text-[#41618c] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-md">
            {description}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {/* <div
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
                </div> */}
            <LearnMoreButton />
          </div>
        </div>
      </main>
      {/* </div> */}
      {/* </div> */}


      <div
        className={`align-middle m-auto bg-[#51ae95]`}
      // className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      // className=" sm:mt-5"
      >
        <img
          // className=" sm: mt-5"
          // width={1150}
          src={image}
          alt="Hero"
        />

      </div>
    </div>
  );
}

export default HeroSection;
