import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
function PopularProduct() {
    return (
   <section id='products' className=' max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Popular <span className=' text-coral-red'>Products</span></h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
    </div>
    <div className='  grid gap-10 mt-10 leading-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {products.map((product,index)=>(
          <div key={index} className=' max-sm:w-full '>
            <PopularProductCard  product={product}/>
          </div>
        ))}
    </div>
   </section>  
    )
}

export default PopularProduct
