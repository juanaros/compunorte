import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-8'>
            <div className='container mx-auto text-center'>
                <div className='mb-4'>
                    <h5 className='text-xl font-semibold'>CompuNorte</h5>
                    <p className='text-sm'>Tu tienda de confianza para armar tu PC</p>
                </div>
                <div className='text-sm mb-4'>
                    <p>&copy; 2024 CompuNorte. Todos los derechos reservados.</p>
                </div>
                <div className='text-sm'>
                    <Link to="/terms-and-conditions" className='text-blue-400 hover:underline'>
                        Términos y Condiciones
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


