import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">
                <p className="text-2xl font-bold text-gradient">Resumind</p>
            </a>
            <a href="/upload" className="primary-button w-fit">
                Upload resume
            </a>
        </nav>
    );
};

export default Navbar;