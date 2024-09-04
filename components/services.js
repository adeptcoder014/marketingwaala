import React from 'react';
import Tag from './tag';
import LearnMoreButton from './button';

const Services = () => {
    const serviceList = [
        { title: "SEO Strategy", icon: 'Seo Strategy' },
        { title: "Influencer Marketing", icon: 'Influencer' },
        { title: "Marketing Strategy", icon: 'Marketing' },
        { title: "Social Media Marketing", icon: 'Social Media' },
    ];

    return (
        <section className="py-12 bg-white mt-1">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <div className="md:w-1/2 lg:w-1/2 flex flex-col items-start justify-start p-4 md:p-10">
                        <Tag
                            tag={'OUR SERVICES'}
                            color={'bg-yellow-500'}
                        />
                        <h2 className="text-[#4b5563] text-4xl md:text-6xl font-bold mb-4 w-full md:w-3/4">
                            We offer the best services for our customers
                        </h2>
                        <p className="text-gray-700 mb-6 w-full md:w-3/4">
                            Find effective digital reach of your business, powered by human behavior and driven by data.
                        </p>
                        <LearnMoreButton />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-10">
                        <img src="Service.webp" alt="Service Image" className="rounded-lg shadow-lg mx-auto" />
                    </div>
                </div>
                <div className="bg-custom p-7 rounded-xl mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {serviceList.map((service, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <img
                                src={`${service.icon}.png`}
                                alt={service.title}
                                width={120}
                                className='m-auto'
                            />
                            <h3 className="text-xl font-bold text-gray-700 mt-4">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
