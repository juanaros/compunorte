import React from 'react'
import Card from '../components/Card'
import { builds } from '../constants'

const Builds = () => {
    return (
        <div className='py-5'>
            <h2 className='text-slate-300 text-3xl text-center font-semibold mx-5' id='products'>Configuraciones recomendadas</h2>
            <div className='mt-10 flex flex-col justify-evenly items-center sm:flex-row gap-10'>
        {builds.map((build) => (
            <Card
            name={build.name}
            cpu={build.cpu}
            ssd={build.ssd}
            ram={build.ram}
            gpu={build.gpu}
            img={build.img}
            />
        ))
        }
        </div>
        </div>
    )
}

export default Builds