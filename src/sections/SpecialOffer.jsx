import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffer() {
    return (
        <section id="SpecialOffers" className=' flex justify-wrap  items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex'>
                <img src={offer} width={773} height={687} alt="" className='object-contain w-full' />
            </div>
            <div className='flex flex-1 flex-col'>
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
       
          <span className='text-coral-red'> Special </span> Offer
          
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex justify-startck   gap-10 flex-wrap'>
           <Button label='Shop now' iconURL={arrowRight} cl />
           <Button label='Learn More' template='text-slate-gray border-2 border-slate-gray '/>
        </div>
            </div>
        </section>
    )
}

export default SpecialOffer
