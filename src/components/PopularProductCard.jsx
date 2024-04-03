import React from 'react'

function PopularProductCard({product}) {
    return (
      <div className='hover:scale-110 '> 
       <img src={product.imgURL} alt={product.name} className='mb-3 w-[280px] h-[280px]' />
       <h3 className="font-palanquin text-slate-gray text-xl font-bold leading-10 ">{product.name}</h3>
       <p className='text-coral-red text-lg '>{product.price}</p>

      </div>  
    )
}

export default PopularProductCard
