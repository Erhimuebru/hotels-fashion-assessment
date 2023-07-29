import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./Search.css"


function SearchComponents() {
 

  return (
    <div className="search flex flex-row justify-center items-end mt-96">
    <div className="sear flex flex-row space-x-2 w-96 bg-white p-3">
      <BiSearch className='Bisearch h-8 pt-2 w-8 text-[gray]' />
      <input
        className="input bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
        type="text"
        placeholder="Find a space" />
    </div>
    <div className="sear flex flex-row space-x-2 w-96 gap-10 lg:gap-32 sm:gap-14 bg-white p-3">
      <input
        className="input durations bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
        type="text"

        placeholder="Duration" />

      <RiArrowDropDownLine className='arrow h-6 w-10 text-[gray]' />
    </div>

    <div className='search-icons bg-red-950 ml-2'>
      <BiSearch className="search-btn h-6 w-6 text-white" />
    </div>

  </div>
);
}


export default SearchComponents;
