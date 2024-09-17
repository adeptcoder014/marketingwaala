import React from 'react';
import Tag from './tag';
import LearnMoreButton from './button';

const SectionCard = ({
    title,
    description,
    image }) => {
    const serviceList = [
        { title: "SEO Strategy", icon: 'icons/Seo Strategy' },
        { title: "Influencer Marketing", icon: 'icons/Influencer' },
        { title: "Marketing Strategy", icon: 'icons/Marketing' },
        { title: "Social Media Marketing", icon: 'icons/Social media' },
    ];

    return (
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
    );
};

export default SectionCard;
