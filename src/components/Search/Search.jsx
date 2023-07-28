import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { XCircleIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./Search.css"


function SearchComponents() {
 

  return (
    <div className="flex flex-row justify-center items-center pb-2">
      <div className="flex flex-row space-x-2 w-96 bg-white p-3">
        <BiSearch className='h-8 pt-2 w-8 text-[gray]' />
        <input
          className="bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
          type="text"
          placeholder="Find a space"
        />
      </div>
<br />

      <div className=" flex flex-row space-x-2 w-96 gap-32 bg-white p-3">
      
        <input
          className="durations bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
          type="text"
          
          placeholder="Duration"
        />
    
          <RiArrowDropDownLine className='h-9 w-12 text-[gray]' />
      </div>
      <div className='bg-red-950 p-5 ml-2'>
        <BiSearch className="h-6 w-6 text-white" />
      </div>
    
 </div>
);
}


export default SearchComponents;
