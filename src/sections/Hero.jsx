import React from 'react';
import bg from '../assets/gaming.jpg';

const Hero = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={style} className='relative h-screen flex flex-col justify-center items-center'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative text-center text-white z-10'>
                <h3 className='text-5xl my-10 drop-shadow-lg sm:text-8xl'>
                    Arma tu próximo PC con nosotros, <br />llegamos a toda Antofagasta
                </h3>
                <p className='text-2xl mb-6 drop-shadow-lg'>
                    ¡Al mejor precio garantizado!
                </p>
                <button type="button" className='w-52 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={scrollToContact}>
                    Cotizar ahora
                </button>
            </div>
        </div>
    );
};

export default Hero;