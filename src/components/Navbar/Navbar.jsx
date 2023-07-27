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
    <header className="fixed top-0 w-full h-28 flex justify-between items-center bg-white text-black">
      {/* Logo */}
      <div className='ml-20'>
        <img src={Logo} alt="" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow justify-center">
        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {/* Menu Icon */}
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6 mr-6" />
            )}
          </button>
          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="bg-[#2c2c2c] mt-96 text-white -mr-4 py-8 px-6">
              <p onClick={closeMobileMenu}>
                <FaTimes className="w-10 h-10 ml-36 mb-4" />
              </p>
              <ul className="space-y-2">
                <li>
                  <Link className="text-black font-semibold" to="/">
                    Hotel
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-semibold " to="">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-semibold " to="">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-semibold" to="/">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-semibold " to="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
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

      {/* Flags and User */}
      <div className=" flex items-center gap-4 space-x-4 mr-20">
        <div className="hidden sm:block">
          <ReactCountryFlag countryCode="GB" svg className='w-8 h-8' />
        </div>

        <div className='hidden sm:block '>
          <BsPersonCircle className='w-8 h-8' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
