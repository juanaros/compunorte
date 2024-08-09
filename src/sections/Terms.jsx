import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className='bg-slate-950 text-slate-300 py-12 px-6'>
            <h1 className='text-3xl font-bold mb-8 text-center'>Términos y Condiciones del Servicio</h1>
            
            <p className='mb-6'>
                <strong>Fecha de entrada en vigor:</strong> [31/07/2024]
            </p>
            
            <p className='mb-6'>
                Bienvenido a CompuNorte. Al utilizar nuestros servicios de cotización y armado de PC, usted acepta los siguientes términos y condiciones. Por favor, léalos detenidamente.
            </p>
            
            <h2 className='text-2xl font-semibold mb-4'>1. Servicios Ofrecidos</h2>
            
            <h3 className='text-xl font-semibold mb-2'>1.1 Servicio de Cotización</h3>
            <p className='mb-4'>
                <strong>Descripción del Servicio:</strong> Ofrezco cotizaciones personalizadas para la compra de componentes de PC y ensamblaje de equipos. La cotización incluye recomendaciones de componentes basadas en sus necesidades y presupuesto.
            </p>
            <p className='mb-4'>
                <strong>Proceso de Cotización:</strong> Para recibir una cotización, deberá proporcionar información sobre sus requisitos, uso previsto, presupuesto y cualquier otra especificación relevante.
            </p>
            <p className='mb-4'>
                <strong>Validez de la Cotización:</strong> Las cotizaciones proporcionadas son válidas por un período determinado. Después de este período, los precios y la disponibilidad de los componentes pueden variar.
            </p>
            
            <h3 className='text-xl font-semibold mb-2'>1.2 Servicio de Armado de PC</h3>
            <p className='mb-4'>
                <strong>Descripción del Servicio:</strong> Ofrezco el servicio de ensamblaje de PCs utilizando los componentes adquiridos a través de mi recomendación o proporcionados por el cliente.
            </p>
            <p className='mb-4'>
                <strong>Proceso de Armado:</strong> Una vez confirmada la cotización y adquirido el equipo, procederé al ensamblaje conforme a las especificaciones acordadas. El servicio incluye la instalación de componentes y pruebas básicas para garantizar el funcionamiento correcto.
            </p>
            <p className='mb-4'>
                <strong>Garantía del Servicio:</strong> Ofrezco una garantía limitada que cubre defectos de instalación y problemas relacionados con el ensamblaje. Las garantías de los componentes adquiridos son proporcionadas exclusivamente por las tiendas donde se compraron. CompuNorte no se responsabiliza por mal funcionamiento de las piezas, solo responderemos por errores en el ensamblaje.
            </p>
            
            <h2 className='text-2xl font-semibold mb-4'>2. Condiciones de Uso</h2>
            <p className='mb-4'>
                <strong>Uso Adecuado:</strong> Usted se compromete a utilizar mis servicios de manera legal y de acuerdo con estas políticas. No debe utilizar los servicios para actividades ilegales o fraudulentas.
            </p>
            <p className='mb-4'>
                <strong>Responsabilidad del Usuario:</strong> Es su responsabilidad proporcionar información precisa y completa para la cotización y el ensamblaje. No me hago responsable por errores en la cotización o problemas en el ensamblaje derivados de información incorrecta proporcionada por el usuario.
            </p>
            
            <h2 className='text-2xl font-semibold mb-4'>3. Modificaciones y Cancelaciones</h2>
            <p className='mb-4'>
                <strong>Modificaciones:</strong> Me reservo el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán publicadas en mi sitio web y entrarán en vigor a partir de su publicación.
            </p>
            <p className='mb-4'>
                <strong>Cancelaciones:</strong> Puede cancelar su solicitud de cotización o servicio de ensamblaje en cualquier momento antes de que se inicie el proceso. Las cancelaciones después del inicio del proceso pueden estar sujetas a cargos según el estado de avance del servicio.
            </p>
            
            <h2 className='text-2xl font-semibold mb-4'>4. Limitación de Responsabilidad</h2>
            <p className='mb-4'>
                <strong>Responsabilidad:</strong> No seré responsable por daños indirectos, incidentales, especiales o consecuenciales derivados del uso de mis servicios. Mi responsabilidad se limita al monto pagado por los servicios contratados.
            </p>
            
            <h2 className='text-2xl font-semibold mb-4'>5. Ley Aplicable</h2>
            <p className='mb-4'>
                <strong>Jurisdicción:</strong> Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Chile. Cualquier disputa relacionada con estos términos se someterá a la jurisdicción de los tribunales competentes en Chile.
            </p>
            
            <p className='mt-6'>
                <strong>Última actualización:</strong> [31/07/2024]
            </p>

            <p className='mt-6'>
                <strong>Tarifa del Servicio:</strong> La tarifa por el servicio de cotización y armado de PC a domicilio es de 29.900 CLP.
            </p>
        </div>
    );
}

export default TermsAndConditions;