// import React from 'react';

// const FooterCard = ({ testimonial, author, position }) => {
//   return (
//     <div className="bg-custom w-full md:w-1/2 p-6 rounded-lg shadow-md">
//       <p className="break-words text-bold text-black">Let's Discuss your project</p>
//       <p className="font-bold break-words">The essential to combine empathy, creativity nad rationality to meet user needs and bussiness success.</p>
//       <p className="text-sm text-gray-600 break-words">{position}</p>
//     </div>
//   );
// };

// export default FooterCard;


// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = () => {
  return (
      <div className='p-5  bg-[#b0d4d0]' >

      <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection:'row'
      }}
        className=" shadow-md m-auto bg-custom from-blue-100 to-blue-50 rounded-lg p-6 flex flex-col items-center justify-center text-center ">


        <div>

        <h2 className=" text-[#4b5563] text-5xl font-bold mb-2 text-left w-full md:w-3/4">Let &#39;s discuss your project</h2>
        <p className="text-gray-600 mb-4 mt-4 text-left w-full md:w-3/4">
          The essential to combine empathy, creativity and rationality to meet user needs and business success
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 flex items-center">
            GET STARTED <span className="ml-2">→</span>
          </button>
        </div>

        <div>

          <img src={'bg-footer.png'} className='hidden sm:inline-block' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
