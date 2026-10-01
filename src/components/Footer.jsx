import React from 'react'
import bg4 from '../assets/bg-4.jpg'
import logo from '../assets/logo.svg'
import i9 from '../assets/img-9.png'
import { NavLink, Outlet } from "react-router-dom";

const Footer = () => {
  return (
   <>
   <div className='min-h-[380px] md:h-[600px] bg-cover bg-center gap-5 flex flex-col justify-center items-center px-4 py-16 text-center' style={{ backgroundImage: `url(${bg4})`}}> 
                <h1 className='text-3xl sm:text-5xl lg:text-7xl text-white font-semibold py-3'>Better for People & the Planet</h1>
                <p className='text-base sm:text-xl text-white max-w-3xl'>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                    <NavLink to="/men"><button className='bg-white text-black px-6 py-3 font-semibold hover:bg-gray-600 tracking-widest w-full sm:w-auto' >SHOP MEN</button></NavLink>
                    <NavLink to="/women"><button  className='bg-white text-black px-6 py-3 font-semibold tracking-widest hover:bg-gray-600 w-full sm:w-auto'>SHOP WOMEN</button></NavLink>
                </div>
           </div>
           <div className='min-h-[100px] px-4 sm:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-3 md:divide-x divide-solid divide-gray-200 justify-center items-center'>
              <div className='w-full md:w-1/3 text-center '>
              <h1 className='text-xl sm:text-2xl font-semibold'><i class="fa-solid fa-lock mr-3"></i>Secure Payment</h1>
              </div>
              <div className='w-full md:w-1/3 text-center'>
              <h1 className='text-xl sm:text-2xl font-semibold'><i class="fa-solid fa-truck mr-3"></i>Express Shipping</h1>
              </div>
              <div className='w-full md:w-1/3 text-center'>
                
              <h1 className='text-xl sm:text-2xl font-semibold'><i class="fa-solid fa-rotate mr-3"></i>Free Return</h1>
              </div>
           </div>
           <hr  className='mx-4 sm:mx-10 md:mx-25 text-gray-300   '/>
           <div className='min-h-[100px] flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 px-6 sm:px-10 py-12 md:py-20'>
              <div className='w-full lg:w-[28%] flex flex-col justify-center gap-5  '> 
                <img src={logo} alt="" className='w-[150px]'/>
                <h4 className='text-base sm:text-xl/8 text-gray-400'>Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</h4>
              </div>
              <div className='w-full sm:w-[45%] lg:w-[20%] flex flex-col '>
                <h3 className='text-2xl sm:text-3xl font-semibold '>Shop</h3>
                <NavLink className='text-lg sm:text-xl mt-8' to="/men">Shop Men</NavLink>
                <NavLink  className='text-lg sm:text-xl' to="/women">Shop Women</NavLink>
                <NavLink  className='text-lg sm:text-xl' to="/lookbook">Lookbook</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/sale">Gift Card</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/sale">Sale</NavLink>
    
              </div>
              <div className='w-full sm:w-[45%] lg:w-[20%] flex flex-col '>
                <h3 className='text-2xl sm:text-3xl font-semibold'>About</h3>
                <NavLink className='text-lg sm:text-xl  mt-8'  to="/ourstory">Our Story</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/ourstory">Our Materials</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/ourstory">Our Value</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/ourstory">Sustainability</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/ourstory">Manufacture</NavLink>
              </div>
              <div className='w-full sm:w-[45%] lg:w-[20%] flex flex-col '>
                <h3 className='text-2xl sm:text-3xl font-semibold'>need Help?</h3>
                <NavLink className='text-lg sm:text-xl  mt-8'  to="/contact">FAQs</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/contact">Shipping & Returns</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/contact">Shoe Care</NavLink>
                <NavLink  className='text-lg sm:text-xl' to="/contact">Size Chart</NavLink>
                <NavLink className='text-lg sm:text-xl'  to="/contact">Contact Us</NavLink>
                
              </div>
           </div>
           <div className='min-h-[100px] flex flex-col sm:flex-row justify-between gap-4 bg-red-50 items-center px-4 sm:px-8 md:px-12 py-6 text-center sm:text-left'>
              <h1 className='text-sm sm:text-base'>© 2026 Recycled Shoe Store. Powered by Recycled Shoe Store.</h1>
    
              <img src={i9} alt="" className='max-w-full h-auto' />
           </div>
            <Outlet />
   </>
  )
}

export default Footer
