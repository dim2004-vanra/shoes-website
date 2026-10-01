import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>

     <div className='min-h-[100px]  flex  flex-col gap-4 justify-center items-center  mt-5 mb-5 px-4 '>
      <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold '>Contact </h1>
    
  </div>
  <div className='mx-4 sm:mx-6 md:mx-10 bg-red-100 flex flex-col lg:flex-row min-h-[100px] mb-10  py-10'>
      <div className='w-full lg:w-[30%] flex flex-col px-6 md:pl-10  pt-6 md:pt-10 pr-6 md:pr-20'>
          <div className='  border-b border-gray-400'>
              <h4 className='text-2xl font-semibold'>
Products & order</h4>
<p className='text-xl text-gray-400 pb-10'>(+1) 123-456-7890 <br />
available 24/7</p>
          </div>
          <div className=' border-b border-gray-400 '>
              <h4 className='text-2xl font-semibold pt-5'>
Info & enquiries</h4>
<p className='text-xl text-gray-400 pb-10'>(+1) 123-456-7890 <br />
available 24/7</p>
          </div>
          <div className=' border-b lg:border-b border-gray-400'>
              <h4 className='text-2xl font-semibold pt-5'>

Store locator
</h4>
<p className='text-xl text-gray-400 pb-10'>Find our retail near you</p>
          </div>
      </div>

      <div className='w-full lg:w-[70%] flex flex-col p-6 md:p-15 gap-5 border-t lg:border-t-0 lg:border-l'>
           <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Simple Contact Form</h1>
     
          <div className='pt-3'>
            <label htmlFor="" className='font-semibold'>Name</label>
          <input type="text"  className='h-[40px] w-full  border-gray-400 border rounded-lg' />
          </div>
          
          <div className='pt-3'>
            <label htmlFor="" className='font-semibold'>Email</label>
          <input type="text"  className='h-[40px] w-full  border-gray-400 border rounded-lg' />
          </div>

          <div className=''>
              <label htmlFor="" className='font-semibold'>Comment & Message</label><br />
              <textarea name="" id=""   className='h-[100px] border w-full rounded-lg border-gray-400'></textarea>
          </div>

          <div className='w-full sm:w-[30%]'>
                             <button className='bg-[#6e7051] hover:bg-gray-700 px-4 py-4 text-white font-semibold  rounded-lg tracking-widest w-full sm:w-auto'>SEND MESSAGE</button>
                  </div>
      </div>
      
  </div>

   <div className='min-h-[100px]   flex  flex-col my-10 md:my-20 gap-4 justify-center items-center px-4 '>
     <div className='w-full md:w-[70%] lg:w-[50%] flex flex-col gap-5 text-center'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl   font-semibold '>Frequently Asked Questions </h1>
    <p className='text-base sm:text-xl text-gray-400'>Purus amet scelerisque nisl nibh felis massa a enim gravida</p>
      <hr className='text-gray-300'/>

      <div className='text-left'>
          <div className='border border-gray-300 px-4 py-2'>
           <h1 className='text-lg sm:text-xl font-semibold text-gray-500'> Quam ligula tristique sed leo nunc aenean amet</h1>
            
          </div>
          <div className='border border-gray-300 px-4 py-2 hidden'>
             <p className='text-xl text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          <div className='border border-gray-300 px-4 py-2'>
           <h1 className='text-lg sm:text-xl font-semibold text-gray-500'>Tortor eget a a tincidunt est viverra turpis</h1>
          </div>
           <div className='border border-gray-300 px-4 py-2 hidden'>
             <p className='text-xl text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          <div className='border border-gray-300 px-4 py-2'>
           <h1 className='text-lg sm:text-xl font-semibold text-gray-500'> Quis cras urna diam id nec amet</h1>
          </div>
           <div className='border border-gray-300 px-4 py-2 hidden'>
             <p className='text-xl text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          <div className='border border-gray-300 px-4 py-2'>
           <h1 className='text-lg sm:text-xl font-semibold text-gray-500'>Id congue bibendum velit blandit massa elementum</h1>
          </div>
           <div className='border border-gray-300 px-4 py-2 hidden'>
             <p className='text-xl text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
      </div>
      <hr className='text-gray-300'/>
     </div>
  </div>
      <Footer />
    </>
  )
}

export default Contact
