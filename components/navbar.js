import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md rounded-md mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
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
                            <div className="relative group">
                                <button className="text-gray-900">PRICING</button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 2</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-900">SERVICES</button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Option 2</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-900">BLOG</button>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-900">ABOUT US</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <a href="/login" className="text-gray-900">LOGIN</a> */}
                        <a href="/get-started" className="ml-4 px-3 py-2 border border-yellow-500 rounded text-yellow-500 hover:bg-yellow-500 hover:text-white transition">GET STARTED</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
