import React from 'react';

const AboutUs = () => {
    return (
        <div className='text-slate-300 py-12 flex flex-col items-center'>
            <h1 className='text-3xl text-center mb-10 font-bold' id='aboutus'>¿Que hacemos en CompuNorte?</h1>
            <div className='flex flex-col gap-10 sm:flex-row sm:justify-center sm:items-center'>
                <div className='text-center font-light max-w-xs sm:max-w-sm'>
                    <h2 className='font-semibold text-2xl mb-5'>Asesoría Integral desde el Inicio</h2>
                    <p>No te preocupes si no tienes conocimientos sobre computadoras. En CompuNorte te guiamos en la selección de componentes y te indicamos dónde adquirirlos, asegurando siempre el mejor precio.</p>
                </div>
                <div className='text-center font-light max-w-xs sm:max-w-sm'>
                    <h2 className='font-semibold text-2xl mb-5'>Servicio de Armado Profesional</h2>
                    <p>Cuando recibas los componentes, uno de nuestros expertos se desplazará a tu domicilio para ensamblar tu nuevo equipo, asegurándose de que todo funcione perfectamente desde el primer momento.</p>
                </div>
                <div className='text-center font-light max-w-xs sm:max-w-sm'>
                    <h2 className='font-semibold text-2xl mb-5'>Olvídate de Todo</h2>
                    <p>En CompuNorte nos encargamos de instalar el sistema operativo Windows 10 u 11, los controladores necesarios y cualquier programa que requieras, asegurando que tu equipo esté listo para usarse.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
