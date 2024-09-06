import React from 'react';
import Tag from './tag';
import LearnMoreButton from './button';
import Carousel from './carousel';

const Testimonials = () => {
    const testimonials = [
        {
          testimonial: 'This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful for Toolaf. Highly recommend!',
          author: 'Pavel Solomin',
          position: 'Founder Net ABC',
        },
        {
          testimonial: 'This is my first time working with a marketing xxx grateful for Toolaf. Highly recommend!',
          author: 'Pavel Solomin',
          position: 'Founder Net ABC',
        },
        {
          testimonial: 'This is my first time working with a marketing company and I had a fantastic experience',
          author: 'Pavel Solomin',
          position: 'Founder Net ABC',
        },
        // Add more testimonials as needed
      ];
    return (
        <div className="App">

            <header className="bg-white text-center py-1">
                <div
                    className="mt-14 bg-yellow-500 "
                    style={{
                        width: 'fit-content',
                        padding: '5px',
                        borderRadius: '15px',
                        margin: 'auto'
                    }}>
                    <p className="text-gray-700 font-bold text-sm">Our Testimonials</p>
                </div>
            </header>
            {/* <main className="p-4 "> */}
            <Carousel cards={testimonials} />
            
            {/* </main> */}
        </div>
    );
};

export default Testimonials;
