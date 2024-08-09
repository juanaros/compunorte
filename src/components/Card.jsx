import React from 'react';

const Card = ({ name, cpu, ram, ssd, gpu, img }) => {
    return (
        <div className='text-slate-300 bg-slate-900 p-8 hover:bg-slate-800 w-96 flex flex-col sm:flex-row rounded-lg shadow-lg transform transition-transform hover:scale-105'>
            <div className='flex justify-center sm:block'>
                <img src={img} alt="PC" className='rounded-lg w-full sm:w-60 h-auto object-cover' />
            </div>
            <div className='sm:ml-5 mt-5 sm:mt-0'>
                <h3 className='text-xl font-semibold mb-3 sm:m-0'>
                    {name}
                </h3>
                <p className='mb-2'><span className='font-bold'>Procesador:</span> {cpu}</p>
                <p className='mb-2'><span className='font-bold'>RAM:</span> {ram}</p>
                <p className='mb-2'><span className='font-bold'>Capacidad:</span> {ssd}</p>
                <p className='mb-4'><span className='font-bold'>Gráficos:</span> {gpu}</p>
                <p className='text-xs italic' >La imagen es referencial y no refleja el ensamblaje final</p>
            </div>
        </div>
    );
}

export default Card;
