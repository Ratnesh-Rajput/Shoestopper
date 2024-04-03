import React from 'react'

function Button({label,iconURL,template}) {
    return (
        <button className={` flex justify-center items-center font-montserrat text-lg leading-none rounded-full ${template? template :" text-white bg-coral-red border-coral-red" }  gap-2 px-7 py-4`}>
            {label}
           {iconURL && <img src={iconURL} alt="arrowRight" className={`ml-2 rounded-full h-5 w-5 `} />}
        </button>
    )
}

export default Button;
