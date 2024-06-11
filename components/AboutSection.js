// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2">
//             <div className="mb-4">
//               <span className="bg-yellow-500 text-white py-1 px-3 rounded-full font-bold">ABOUT</span>
//             </div>
// <h2 className="text-3xl font-bold mb-4">Grow with a the digital marketing agency?</h2>
// <p className="text-gray-700 mb-6">
//   Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads.
// </p>
//             <a href="#" className="inline-flex items-center px-4 py-2 text-yellow-500 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
//               LEARN MORE <span className="ml-2">➔</span>
//             </a>
//           </div>
//           <div className="md:w-1/2 mt-6 md:mt-0">
//             <div className="grid grid-cols-1 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-lg">
//                 <h3 className="font-bold text-lg">Recent activity</h3>
//                 <ul className="mt-2">
//                   <li className="flex justify-between">
//                     <span>Zen Richarlison</span>
//                     <span className="text-gray-600">$12.50</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Nikki Sukamulo</span>
//                     <span className="text-gray-600">$26.75</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Michelle Wijaya</span>
//                     <span className="text-gray-600">$8.00</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="flex gap-4">
//                 <div className="bg-custom p-4 rounded-lg shadow-lg flex-1">
//                   <h3 className="font-bold text-lg">Total Sales</h3>
//                   <p className="text-2xl font-bold mt-2">258</p>
//                   <p className="text-sm text-gray-600">Since previous 30 days</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
//                   <h3 className="font-bold text-lg">Today&apos;s order</h3>
//                   <p className="text-2xl font-bold mt-2">$150</p>
//                   <p className="text-sm text-gray-600">10 products sold</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;






import React from 'react';
// import { ReactComponent as SeoIcon } from '.C:\Users\Sandeep-Sinha\Desktop\Project1\marketingwaala\public\Influencer.PNG'; // Replace with your actual SVG path
// import { ReactComponent as InfluencerIcon } from './icons/influencer.svg'; // Replace with your actual SVG path
// import { ReactComponent as MarketingIcon } from './icons/marketing.svg'; // Replace with your actual SVG path
// import { ReactComponent as SocialMediaIcon } from './icons/socialmedia.svg'; // Replace with your actual SVG path

const AboutSection = () => {

  const serviceList = [{
    title: "SEO Strategy",
    icon: 'Seo Strategy',
  },
  {
    title: "Influencer Marketing",
    icon: 'Influencer',
  },
  {
    title: "Marketing Strategy",
    icon: 'Marketing',
  },
  {
    title: " Social Media Marketing",
    icon: 'Social Media',
  },
  ]
  return (
    <section className="py-12 bg-white mt-1">
      <div className="container mx-auto px-4 flex flex-col ">
        <div className="flex flex-col md:flex-row item-around justify-around">


          <div className=" md:w-1/2 lg:w-1/2 flex flex-col items-start justify-start p-10">

            <div
              className="mb-4 bg-yellow-500 "
              style={{
                width: 'fit-content',
                padding: '5px',
                borderRadius: '15px'
              }}>
              <p className="text-gray font-bold text-sm">OUR SERVICE</p>
            </div>


            <div style={{
              // width:'50%'
            }}>

              <h2 className="text-6xl font-bold mb-4">Grow with a the digital marketing agency?</h2>
              <p className="text-gray-700 mb-6">Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads.</p>
              <a href="#" className="inline-flex items-center px-4 py-2 text-yellow-500 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
                LEARN MORE <span className="ml-2">➔</span>
              </a>
            </div>

          </div>

          <div className="float">
            <img src="hero1.png" alt="Service Image" className="rounded-lg shadow-lg" />

          </div>
        </div>
        <div className="bg-custom rounded-xl p-5 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {serviceList.map(x => (
            <div className='flex flex-col '>
              {/* <div> */}

              <img
                src={`${x.icon}.png`}
                alt="Hero"
                width={120}
                className='m-auto'
              />
              {/* </div> */}
              <h3 className="text-xl font-bold text-gray-700">{x.title}</h3>
            </div>

          ))}


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
