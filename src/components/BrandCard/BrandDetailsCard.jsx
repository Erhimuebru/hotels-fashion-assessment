import React from 'react'
import {  ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline"
import "./BrandCard.css"


const BrandDetailsCard = ({
    id,
    img,
    title,
    discription
    
  }) => {
   
    return (  
        

        <>
 
 <div

className=" relative  w-80 mt-4  pl-3 mb-1 rounded-md bg-white shadow">

<img src={img} alt="" className="curved-top-image w-72 h-48 mt-4 pl-1 rounded-t-lg  " />

<div className='absolute top-24 left-8  bg-slate-50 p-1 rounded-full'>

<ChevronLeftIcon className='w-6 h-6 text-[gray] bg-transparent' />
</div>

<div className="absolute top-24 right-8 bg-slate-50 p-1 rounded-full">

<ChevronRightIcon className="w-6 h-6 text-gray-600 bg-transparent" />
</div>


<div className="px-3 pb-4 ">

    <p className=" text-lg font-semibold pt-4 pb-4">{title}</p>
    <div className="flex-row flex items-center gap-32 mb-4">
        <div className=''>
        
        <p className="text-gray-500 text-1xl">{discription}</p>
        </div>
       
        
       
    </div>
  </div>
</div>




        </>  
        
    );
}
 
export default BrandDetailsCard;