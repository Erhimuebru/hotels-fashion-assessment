import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/Rectangle 298.png';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { BsPersonCircle } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative top-0 w-full h-24 flex justify-between items-center bg-white text-black">
      {/* Logo */}
      <div className='sm:ml-20 lg:ml-20'>
        <img src={Logo} alt="" />
      </div>


      <nav className="flex flex-grow justify-center">
     
        <div className="sm:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 mr-20" />
            ) : (
              <FaBars className="w-6 h-6 lg:mr-6" />
            )}
          </button>


          {isMobileMenuOpen && (
            
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#2c2c2c] py-6 px-6">
              <p onClick={closeMobileMenu}>
                <FaTimes className="w-10 h-10 ml-72 mb-2 text-white" />
              </p>
              <ul className="space-y-2">
                <li className='pb-4 pt-20'>
                  <Link className=" text-white text-3xl font-semibold" to="/">
                    Hotel
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link className=" text-white text-3xl  text-whitefont-semibold " to="">
                    Brand
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link className=" text-white text-3xl font-semibold " to="">
                    About Us
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link className=" text-white text-3xl font-semibold" to="/">
                    How it Works
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link className=" text-white text-3xl font-semibold " to="/">
                    Pricing
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link className=" text-white text-3xl font-semibold" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=''>
          <BsPersonCircle className='w-8 h-8 text-white' />
        </div>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 space-x-4">
          <li>
            <Link className="" to="/">
              Hotel
            </Link>
          </li>
          <li>
            <Link className="" to="">
              Brand
            </Link>
          </li>
          <li>
            <Link className="" to="">
              About Us
            </Link>
          </li>
          <li className='flex flex-row'>
            <Link className="" to="/">
              How it Works
               
            </Link>
            <RiArrowDropDownLine className='w-10 h-6'/>
          </li>
          <li>
            <Link className="" to="/">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="" to="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    
      <div className=" flex items-center gap-4 space-x-4 lg:mr-20">
        <div className="hidden sm:block">
          <img src="https://res.cloudinary.com/dmfb370xe/image/upload/v1690671782/uk-flag_duciyw.png" alt="GB flag"  className='w-8 h-8 rounded-full' />
      
        </div>

        <div className='hidden sm:block '>
          <BsPersonCircle className='w-8 h-8' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
