import React, { useState, useEffect } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="bg-white relative w-full">
            <div className="overflow-hidden" id='dabba'>
                <div
                    className="whitespace-nowrap transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards?.map((card, index) => (
                        <div
                            style={{
                                // width:'50%',
                                padding: '50px',
                            }}
                            className="inline-block" key={index}>
                            {/* <Card {...card} /> */}
                            <div
                                className="bg-custom p-16 rounded-lg shadow-md"
                                style={{
                                    // width: '70%',
                                    // padding: '50px',
                                }}
                            >


                                <div style={{
                                    // width:'50%'
                                }}>

                                    {/* <h2 className=" font-bold mb-4">Grow with a the digital marketing agency?</h2> */}
                                    {/* <p className="text-gray-700 mb-6">Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads.</p> */}
                                        <p
                                            className=""
                                            style={{
                                                fontSize: '15px',
                                                width: '51%'
                                            }}
                                        >{card.testimonial}</p>
                                    {/* <a href="#" className="inline-flex items-center px-4 py-2 text-yellow-500 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
                                        LEARN MORE <span className="ml-2">➔</span>
                                    </a> */}
                                </div>
                                <p className="font-bold">{card.author}</p>
                                <p className="text-sm text-gray-600 break-words">{card.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
