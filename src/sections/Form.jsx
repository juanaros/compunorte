import React from 'react';

const Form = () => {
    return (
        <div className='flex flex-col items-center py-12 px-5'>
            <div className='text-slate-400 mb-8 text-center'>
                <h2 className='text-3xl font-semibold mb-2' id='contact'>Contáctanos para Obtener Asesoría Personalizada</h2>
                <p className='text-lg font-light'>Solicita una cotización o permítenos armar tu computador con las piezas que ya has adquirido.</p>
                <p className='text-lg font-light'>Responderemos a tu consulta lo más pronto posible.</p>
            </div>
            <form 
                className='w-full max-w-lg' 
                name="compunorte-contact" 
                method="post" netlify
            >
                <div className='flex flex-col gap-5 sm:flex-row sm:gap-3 mb-5'>
                    <input type="hidden" name="form-name" value="compunorte-contact" />

                    <input type="text" placeholder='Nombre' name="Name" className='p-3 rounded-lg border border-indigo-600 w-full sm:w-1/2' />
                    <input type="email" placeholder='tucorreo@ejemplo.com' name="email" className='p-3 rounded-lg border border-indigo-600 w-full sm:w-1/2' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-slate-400 mb-2 font-light'>
                        Cuéntanos para qué quieres la máquina, qué uso le vas a dar, cuál es tu presupuesto, etc.
                    </label>
                    <textarea placeholder='Mensaje' name="message" className='p-3 rounded-lg border border-indigo-600 h-32 sm:h-40 resize-none'></textarea>
                    <button type="submit" className='w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
