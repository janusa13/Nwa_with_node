import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Usando react-icons para íconos

const Nav = () => {
    return (
        <nav className="bg-blue-500 p-4 w-full flex items-center justify-between">
            <div>
                <h1 className="text-white text-xl font-semibold">NWA</h1>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-white">Bienvenido</span>
                <FaUserCircle className="text-white text-2xl" />
            </div>
        </nav>
    );
};

export default Nav;
