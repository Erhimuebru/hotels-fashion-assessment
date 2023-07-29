import React from 'react'
import {StarIcon} from "@heroicons/react/24/solid"
import {MapPinIcon} from "@heroicons/react/24/solid"
import { HeartIcon, ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline"
import "./AvailableCard.css"


const AvailableDetailsCard = ({
    id,
    img,
    title,
    rating,
    address,
    price,
  availability
  }) => {
   
    return (  
        

        <>

<div

className=" relative  w-80 mt-4  pl-3 mb-1 rounded-md bg-white shadow">

<img src={img} alt="" className="curved-top-image w-72 h-48 mt-4 pl-1 rounded-t-lg  " />
<div className='absolute top-8 right-8'>

<HeartIcon className='w-8 h-8 text-white' />
</div>
<div className='absolute top-24 left-8  bg-slate-50 p-1 rounded-full'>

<ChevronLeftIcon className='w-6 h-6 text-[gray] bg-transparent' />
</div>

<div className="absolute top-24 right-8 bg-slate-50 p-1 rounded-full bg-transparent">
{/* Add bg-transparent to make the background transparent */}
<ChevronRightIcon className="w-6 h-6 text-gray-600 bg-transparent" />
</div>


<div className="px-3 pb-4 ">

    <p className=" text-lg pt-4 pb-4">{title}</p>
    <div className="flex-row flex items-center gap-32 mb-4">
        <div className='flex flex-row '>
        <MapPinIcon className="h-6 w-6 text-[gray]" opacity={0.4} />
        <p className="text-gray-500 text-1xl">{address}</p>
        </div>
        <div className='flex flex-row gap-1'>
        <StarIcon className="h-6 w-6 text-[yellow]" opacity={0.5} />
        <p className="text-gray-500 ">{rating} </p>
        </div>
       
    </div>
    <p className='pb-4 text-red-800'>{availability}</p>
    <p className="flex flex-row text-gray-500">From <p className='font-bold pl-1 text-black'>€{price}</p>/day </p>



</div>
</div>





        </>  
        
    );
}
 
export default AvailableDetailsCard;