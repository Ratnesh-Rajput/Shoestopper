import React from 'react'

function ReviewCard({imgURL,feedback,rating,customerName}) {
    return (
       <div className='flex justify-center items-center flex-col '>
            <img src={imgURL} alt="customerImg" className=' rounded-full object-cover w-[120px] h-[120px] ' />
            <p className=' mt-6 text-center info-text font-bold max-w-sm'>
                {feedback}
            </p>
            <div>
                {/* Rating */}
            </div>
            <h3 className='mt-1 text-center font-palanquin  font-bold text-3xl '>
                {customerName}
            </h3>

       </div> 
    )
}

export default ReviewCard
