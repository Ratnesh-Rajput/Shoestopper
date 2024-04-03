import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

function CustomerReviews() {
    return (
        <section className='flex flex-col  max-container '>
            <h3 className='font-bold font-palanquin text-4xl justify-center w-full text-center max-sm:text-xl'>
                What Our <span className='text-coral-red'>Customers</span> Say?
            </h3>
            <p className='info-text mt-4 m-auto max-w-lg text-center'>
                Hear genuine stories from our satisfied customers about their exceptional experience with us.
            </p>
            <div className=' justify-evenly flex flex-1 mt-24 gap-14 max-lg:flex-col '>
                {reviews.map((review)=>(
                    <div key={review.customerName}
                       
                    >
                        <ReviewCard  imgURL={review.imgURL}
                        rating={review.rating}
                        customerName={review.customerName}
                        feedback={review.feedback}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews
