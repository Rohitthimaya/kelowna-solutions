import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="../../images/KelownaSoftware-logo.png" alt="Kelowna Software" className="h-10" />
                </div>
                
                {/* Menu Items */}
                <ul className="flex items-center space-x-12 text-gray-900 font-bold text-lg">
                    <li className="hover:text-blue-600 cursor-pointer">ABOUT</li>
                    <li className="relative group hover:text-blue-600 cursor-pointer">
                        SERVICES
                        <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service 2</li>
                        </ul>
                    </li>
                    <li className="relative group hover:text-blue-600 cursor-pointer">
                        CASE STUDIES
                        <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Case Study 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Case Study 2</li>
                        </ul>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">CONTACT</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
