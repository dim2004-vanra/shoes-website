import React from 'react'
import Footer from '../components/Footer'
import l1 from '../assets/l1.jpg'
import l2 from '../assets/l2.jpg'
import l3 from '../assets/l3.jpg'
import l4 from '../assets/l4.jpg'


const Lookbook = () => {
    return (
  <>
  <div className='min-h-[100px] flex justify-center items-center  mt-5 mb-5 px-4 '>
      <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold '>LookBook</h1>
  </div>
  <div className='px-4 sm:px-6 md:px-10 py-6 md:py-10 mt-6 md:mt-15'>
      <img src={l1} alt="" className='w-full' />
      <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-1/2 py-6 md:py-10 text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold '>Fall/Winter 2021</h1>
          </div>
          <div className='w-full md:w-1/2 py-6 md:py-10 px-4 md:px-10 md:mr-20 flex flex-col justify-start items-start gap-5'>
                <p className='text-base sm:text-xl text-gray-400 tracking-wide'>
Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className='hover:decoration-black text-xl underline decoration-2 decoration-[#f6aa28] underline-offset-8 '>Read More</button>
         
          </div>
      </div>
      
  </div>
   <div className='px-4 sm:px-6 md:px-10 py-6 md:py-10 mt-6 md:mt-15'>
      <img src={l2} alt="" className='w-full' />
      <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-1/2 py-6 md:py-10 text-center md:px-20'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold '>Spring/Summer 2021</h1>
          </div>
          <div className='w-full md:w-1/2 py-6 md:py-10 px-4 md:px-10 md:mr-20 flex flex-col justify-start items-start gap-5'>
                <p className='text-base sm:text-xl text-gray-400 tracking-wide'>
Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className='hover:decoration-black text-xl underline decoration-2 decoration-[#f6aa28] underline-offset-8 '>Read More</button>
         
          </div>
      </div>
      
  </div>
   <div className='px-4 sm:px-6 md:px-10 py-6 md:py-10 mt-6 md:mt-15'>
      <img src={l3} alt="" className='w-full' />
      <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-1/2 py-6 md:py-10 text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold '>Go & Play</h1>
          </div>
          <div className='w-full md:w-1/2 py-6 md:py-10 px-4 md:px-10 md:mr-20 flex flex-col justify-start items-start gap-5'>
                <p className='text-base sm:text-xl text-gray-400 tracking-wide'>
Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className='hover:decoration-black text-xl underline decoration-2 decoration-[#f6aa28] underline-offset-8 '>Read More</button>
         
          </div>
      </div>
      
  </div>
   <div className='px-4 sm:px-6 md:px-10 py-6 md:py-10 mt-6 md:mt-15'>
      <img src={l4} alt="" className='w-full' />
      <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-1/2 py-6 md:py-10 text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold '>Adventurer Gear</h1>
          </div>
          <div className='w-full md:w-1/2 py-6 md:py-10 px-4 md:px-10 md:mr-20 flex flex-col justify-start items-start gap-5'>
                <p className='text-base sm:text-xl text-gray-400 tracking-wide'>
Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className='hover:decoration-black text-xl underline decoration-2 decoration-[#f6aa28] underline-offset-8 '>Read More</button>
         
          </div>
      </div>
      
  </div>
  
  <Footer />
  </>
  )
}

export default Lookbook
