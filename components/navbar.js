import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const servicesDropdownList = [
        { title: 'Social Media Marketing' },
        { title: 'Influencer Marketing' },
        { title: 'Website Development' },
        { title: 'Perfomance Marketing' },
        { title: 'SEO Services' },
        { title: 'Perfomance Marketing' },
        { title: 'Branding Strategy' },
    ]
    return (
        <nav className="bg-white shadow-md rounded-md mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                src={`logo.png`}
                                alt="Hero"
                                width={35}
                                className='mr-4'
                            />
                            <a href="/" className="text-xl font-bold text-yellow-500">Marketing Waala</a>
                        </div>
                        <div className="hidden md:flex space-x-8 ml-10 items-center">
                            <div className="relative group">
                                <button className="text-gray-900">HOME</button>
                            </div>
                            {/* <div className="relative group">
                                <button className="text-gray-900">PRICING</button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 2</a>
                                </div>
                            </div> */}
                            <div className="relative group">
                                <button className="text-gray-900">SERVICES</button>
                                <div className="absolute z-50  left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    {servicesDropdownList?.map(x =>


                                        <a key={x} href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">{x.title}</a>
                                    )
                                    }
                                </div>
                            </div>
                            <div className="relative group">
                                <a href="https://www.blogs.marketingwaala.in/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-gray-900">BLOG</button>

                                </a>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-900">ABOUT US</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="/get-started" className="hidden sm:inline-block ml-4 px-3 py-2 border border-yellow-500 rounded text-yellow-500 hover:bg-yellow-500 hover:text-white transition">GET STARTED</a>
                    </div>
                    <div className="flex md:hidden items-center">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">HOME</a>
                        <div className="relative group">
                            <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 w-full text-left">PRICING</button>
                            <div className="mt-2 w-full bg-white rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 2</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 w-full text-left">SERVICES</button>
                            <div className="mt-2 w-full bg-white rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 2</a>
                            </div>
                        </div>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">BLOG</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">ABOUT US</a>
                        <a href="/get-started" className=" block w-full text-center mt-2 px-3 py-2 border border-yellow-500 rounded text-yellow-500 hover:bg-yellow-500 hover:text-white transition">GET STARTED</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
