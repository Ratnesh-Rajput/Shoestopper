import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
function Services() {
    return (
        <section className='max-container gap-9 justify-center flex flex-wrap '>
            {services.map((service)=>(
                <div key={service}>
                   <ServiceCard {...service} />
                </div>
            ))}
        </section>
    )
}

export default Services
