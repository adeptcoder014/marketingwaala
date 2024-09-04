import React from 'react';
import Tag from './tag';

const LearnMoreButton = () => {
    return (
        <div className="mt-3 sm:mt-2 mb-4">
            <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-[#f7b405] to-[#b88929] text-gray   hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
                Learn More
            </a>
        </div>

    );
}

export default LearnMoreButton;
