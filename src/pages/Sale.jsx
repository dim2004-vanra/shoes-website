import React from 'react'
import Footer from '../components/Footer'
import bg5 from '../assets/bg-5.jpg'
import bg6 from '../assets/bg-6.jpg'
import { useContext } from 'react'
import { mycontext } from '../context/Productdata'
import { NavLink } from 'react-router-dom'

const Sale = () => {
     
    const products = useContext(mycontext)

  return (
  <>
   <div className='min-h-[100px] flex justify-center items-center  mt-5 mb-5 px-4 '>
      <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold '>Sale</h1>
  </div>
   <div className='min-h-[100px] flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 px-4 sm:px-6 md:px-10 pb-10'>
          <div className='w-full md:flex-1 min-h-[280px] md:h-[400px] bg-cover bg-center flex flex-col gap-5 justify-center items-center px-4 text-center' style={{ backgroundImage: `url(${bg5})`}} >
              <p className='text-white text-xl sm:text-2xl font-semibold'>Rafer A Friend</p>
              <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-semibold py-5'>Get 20% OFF</h1>
              <NavLink to="/"><button className='px-7 py-3 outline-2 text-white  text-lg tracking-wide font-semibold hover:bg-white hover:text-gray-700'>Learn More</button></NavLink>
          </div>
          <div className='w-full md:flex-1 min-h-[280px] md:h-[400px] bg-cover bg-center flex  gap-5  flex-col justify-center items-center px-4 text-center' style={{ backgroundImage: `url(${bg6})`}} >
                         <p className='text-white text-xl sm:text-2xl font-semibold'>Pramotion</p>
             <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-semibold py-5'>Student Discount</h1>
              <NavLink to="/"><button className='px-7 py-3 outline-2 text-white  text-lg tracking-wide  font-semibold hover:bg-white hover:text-gray-700'>Learn More</button></NavLink>
   
          </div>
      </div>
       <div className='min-h-[100px] flex flex-col px-4 sm:px-8 md:px-20 pb-10'>
              <div className='flex flex-col sm:flex-row sm:justify-between gap-3 pt-10 md:pt-20 '>
                  <h2 className='text-2xl sm:text-3xl font-semibold'>Last Pairs</h2>
                  <NavLink className='text-base sm:text-xl tracking-wide underline decoration-2 decoration-[#f6aa28] hover:decoration-black ' to="/collection">View All </NavLink>
              </div>
      
              <div className='min-h-[100px] flex flex-wrap gap-6 pt-10 justify-center items-center text-center'>
                {products.map((p) => (
                 p.id <=  9 ? (
                     <div className='w-full max-w-sm sm:w-[calc(50%-12px)] lg:w-[380px] pb-10 ' key={p.id}> 
                    <NavLink to={`/productdetails/${p.id}`}><img src={p.image} alt="" className='w-full' /></NavLink>
                    <NavLink to={`/productdetails/${p.id}`}><h2 className='text-xl font-bold pt-5 '>{p.name}</h2></NavLink>
                    <p className='text-xl text-gray-400 font-semibold'>{p.price}.00</p>
                </div> 
                  ) : "" 
                  
                  
                ))}
                
              </div>
            </div>
            <div className='min-h-[100px] flex flex-col md:flex-row px-4 sm:px-8 md:px-20 py-10 bg-red-50 items-center gap-6'>
                  <div className='w-full md:w-[70%] text-center md:text-start'>
                      <h1 className='text-3xl sm:text-4xl'>The Best Gift</h1>
                      <p className='text-base sm:text-xl text-gray-400 '>Lacus vel sit eu integer leo nec ornare consequat eget dolor</p>
                  </div>
                  <div className='w-full md:w-[30%] text-center md:text-end'>
                             <button className='bg-[#6e7051] px-4 py-4 text-white font-semibold  tracking-widest w-full sm:w-auto'>SHOP GIFT CARD</button>
                  </div>
            </div>
  <Footer />
  </>
  )
}

export default Sale
