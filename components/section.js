import React from 'react';
import Tag from './tag';
import LearnMoreButton from './button';
import SectionCard from './sectionCard';

const Section = ({
    title,
    description,
    image,
    sectionVisible,
    imageAlign,
    tagContent,
    tagColor }) => {


    return (
        <section className="py-12 bg-white mt-1">
            <div className="container mx-auto px-4 ">
                <div className=" flex flex-col md:flex-row items-center md:justify-between lg:p-10">

                    {imageAlign == "right" ? (
                        <>
                            <div className=" md:w-1/2 flex flex-col items-center justify-center  md:p-10 lg:p-0">
                            <Tag
                                    tag={tagContent}
                                    color={tagColor}
                                />
                                <h2 className="text-[#4b5563] text-4xl md:text-5xl font-bold mb-4 w-full md:w-3/4 text-center">
                                {title}
                                </h2>
                                <p className="text-gray-700 mb-6 w-full md:w-3/4">
                                    {description}
                                </p>
                                <LearnMoreButton />
                            </div>


                            <div className=" w-full md:w-1/2 lg:w-1/2 p-4 md:p-10">
                                <img
                                    src={image}
                                    alt="Service Image"
                                    className="rounded-lg shadow-lg mx-auto"
                                />

                            </div>
                        </>
                    ) : (
                        <>

                            <div className=" w-full md:w-1/2 lg:w-1/2 p-4 md:p-10">
                                <img
                                    src={image}
                                    alt="Service Image"
                                    className="rounded-lg shadow-lg mx-auto"
                                />

                            </div>
                            <div className=" md:w-1/2 flex flex-col items-center justify-center  md:p-10 lg:p-0">
                                <Tag
                                    tag={tagContent}
                                    color={tagColor}
                                />
                                <h2 className="text-[#4b5563] text-4xl md:text-5xl font-bold mb-4 w-full md:w-3/4 text-center">
                                    {title}
                                </h2>
                                <p className="text-gray-700 mb-6 w-full md:w-3/4">
                                    {description}
                                </p>
                                <LearnMoreButton />
                            </div>



                        </>
                    )}

                </div>




                {sectionVisible ? <SectionCard /> : null}

            </div>
        </section >
    );
};

export default Section;
