import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-slate-900 text-white py-5'>
            <Link 
                to="/"
                className='text-center text-2xl font-light hover:text-slate-300 block'
            >
                CompuNorte
            </Link>
        </nav>
    );
}

export default Navbar;
