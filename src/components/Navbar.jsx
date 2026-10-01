import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  const navLinkClass = ({ isActive }) =>
    `block py-2 lg:py-0 ${isActive ? 'font-semibold' : ''}`

  return (
    <>
    <div className='py-4 md:py-8 px-4 sm:px-6 md:px-10 flex justify-between items-center gap-4'>
      <div className='flex gap-8 items-center text-black text-lg xl:text-xl'>
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Recycled Shoe Store" className='h-10 w-[100px] md:h-[50px] md:w-[120px] object-contain' />
        </NavLink>
        <div className='hidden lg:flex gap-8 items-center'>
          <NavLink to="/men" className={navLinkClass}>Men</NavLink>
          <NavLink to="/women" className={navLinkClass}>Women</NavLink>
          <NavLink to="/collection" className={navLinkClass}>Collection</NavLink>
          <NavLink to="/lookbook" className={navLinkClass}>Lookbook</NavLink>
          <NavLink to="/sale" className={navLinkClass}>Sale</NavLink>
        </div>
      </div>
      <div className='hidden lg:flex gap-8 text-lg xl:text-xl items-center'>
        <NavLink to="/ourstory" className={navLinkClass}>Our Story</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </div>
      <button
        type="button"
        className='lg:hidden p-2 border border-gray-300'
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? (
          <span className='block w-6 text-2xl leading-none'>×</span>
        ) : (
          <span className='flex flex-col gap-1.5 w-6'>
            <span className='block h-0.5 w-full bg-black'></span>
            <span className='block h-0.5 w-full bg-black'></span>
            <span className='block h-0.5 w-full bg-black'></span>
          </span>
        )}
      </button>
    </div>
    {open && (
      <div className='lg:hidden flex flex-col px-6 pb-6 text-lg border-b border-gray-200 bg-white'>
        <NavLink to="/men" className={navLinkClass} onClick={closeMenu}>Men</NavLink>
        <NavLink to="/women" className={navLinkClass} onClick={closeMenu}>Women</NavLink>
        <NavLink to="/collection" className={navLinkClass} onClick={closeMenu}>Collection</NavLink>
        <NavLink to="/lookbook" className={navLinkClass} onClick={closeMenu}>Lookbook</NavLink>
        <NavLink to="/sale" className={navLinkClass} onClick={closeMenu}>Sale</NavLink>
        <NavLink to="/ourstory" className={navLinkClass} onClick={closeMenu}>Our Story</NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
      </div>
    )}
    <Outlet />
    </>
  )
}

export default Navbar
