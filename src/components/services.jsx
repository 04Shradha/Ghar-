import React from 'react';
import { FiWifi } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the food icon
import { FaBuilding } from 'react-icons/fa'; // Import the building icon
import { FaHotel } from 'react-icons/fa';


const Services = () => {
  return (
    <>
      <div className="bg-slate-700 p-20 px-10">
        <h1 className='text-5xl font-bold text-center text-white'>Services</h1>
        <div className='mx-auto border-4 m-4 w-60 border-pink-200'></div>
        <div className="flex mt-20 mx-5 px-5 ">
          <div className="mx-2 text-center border p-8  hover:bg-slate-600 transition-colors duration-300 ease-in-out">
            <FaHotel className="text-pink-200 mb-2 text-5xl mx-auto" />
            <h1 className='text-white text-3xl mb-12'>Room Service</h1>
            <p className='text-white text-xl mt-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt, corrupti rem tempora quibusdam reiciendis similique dolorem praesentium cum </p>
          </div>

          <div className="mx-2 text-center border p-8  hover:bg-slate-600 transition-colors duration-300 ease-in-out">
            <FaBuilding className="text-pink-200 mb-2 text-5xl mx-auto" />
            <h1 className='text-white text-3xl mb-12'>PG Service</h1>
            <p className='text-white text-xl mt-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt, corrupti rem tempora quibusdam reiciendis similique dolorem praesentium cum </p>
          </div>
          <div className="mx-2 text-center border p-8 hover:bg-slate-600 transition-colors duration-300 ease-in-out ">
            <GiHamburgerMenu className="text-pink-200 mb-2 text-5xl mx-auto" />
            <h1 className='text-white text-3xl mb-12'>Food service</h1>
            <p className='text-white text-xl mt-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt, corrupti rem tempora quibusdam reiciendis similique dolorem praesentium cum </p>
          </div>
          <div className="mx-2 text-center border p-8 hover:bg-slate-600 transition-colors duration-300 ease-in-out ">
            <FiWifi className="text-pink-200 mb-2 text-5xl mx-auto" />
            <h1 className='text-white text-3xl mb-12'>Free Wi-Fi Service</h1>
            <p className='text-white text-xl mt-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt, corrupti rem tempora quibusdam reiciendis similique dolorem praesentium cum </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
