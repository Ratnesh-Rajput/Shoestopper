import React from 'react'

function ServiceCard({imgURL,label,subtext}) {
    return (
        <div className=' shadow-3xl flex-1 sm:w-[350px] sm:min-h-[350px] rounded-[20px] px-10 py-16 hover:scale-110 '>
                <div className='bg-coral-red rounded-full flex justify-center items-center w-11 h-12  mb-8 '>
                    <img src={imgURL} alt={label} />
                </div>
                <h2 className='mt-5 font-palanquin font-bold text-lg '> {label}</h2>
                <p className='font-montserrat text-slate-gray mt-3 break-words leading-normal'> {subtext}</p>
       </div>
    )
}

export default ServiceCard
