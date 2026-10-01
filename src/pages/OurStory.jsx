import React from 'react'
import Footer from '../components/Footer'
import img7 from '../assets/img-7.png'
import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import i3 from '../assets/i3.svg'

const OurStory = () => {
  return (
    <>
      <div className='min-h-[100px]  flex  flex-col gap-4 justify-center items-center  mt-5 mb-5 px-4 '>
      <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold '>Our Story</h1>
      <p className='text-xl sm:text-2xl md:text-4xl w-full md:w-[50%] text-center font-semibold'>Taking a stylish and sustainable footwear with a focus on creating a positive impact on both the world and the people</p>
  </div>
    <div className='w-full min-h-[100px] px-4 sm:px-8 md:px-20 py-6 md:py-10'>
      <iframe className='w-full h-[220px] sm:h-[360px] md:h-[600px]' src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwebsitedemos.net&widgetid=1&forigin=https%3A%2F%2Fwebsitedemos.net%2Frecycled-shoe-store-04%2Fstory%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwebsitedemos.net%2Frecycled-shoe-store-04%2Fsale%2F&vf=2" frameBorder="0"></iframe>
        <div className='flex flex-col md:flex-row gap-8 justify-center items-start py-10 px-2 md:px-10'>
          <div className='flex flex-col gap-4'>
              <h3 className='text-[#6e7051] text-2xl font-semibold'>Ethics and equality</h3>
              <p className='text-lg'>Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
          </div>
          <div className='flex flex-col  gap-4'>
              <h3 className='text-[#6e7051] text-2xl font-semibold'>Eco-design</h3>
              <p className='text-lg'>Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
          </div>
          <div className='flex flex-col  gap-4'>
              <h3 className='text-[#6e7051] text-2xl font-semibold'>Wildlife Preservation </h3>
              <p className='text-lg'>Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
          </div>
        </div>
   
    </div>
    <div className='mx-4 sm:mx-6 md:mx-10 bg-red-50 min-h-[100px]'>
        <div className='flex flex-col justify-center gap-5'> 
            
              <div className=' flex flex-col md:flex-row px-4 md:px-10 py-6 md:py-10 gap-4'>
                  <h1 className='text-2xl sm:text-3xl w-full md:w-[30%]'>Mission</h1>
                  <div className='w-full md:w-[60%] flex flex-col gap-5'>
                    <p className='text-base sm:text-xl'>
Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat at dui, arcu nec id non pellentesque dolor feugiat dolor ac ac sem semper nulla dis vitae, quis elit odio nunc dignissim aliquam ipsum.</p>
                  <p className='text-base sm:text-xl'>Mattis pretium nec tellus viverra phasellus sed tortor ac tincidunt adipiscing nibh eget, adipiscing sit penatibus lobortis placerat</p>
                  </div>
              </div>
               <div className=' flex flex-col md:flex-row px-4 md:px-10 py-6 md:py-10 gap-4'>
                  <h1 className='text-2xl sm:text-3xl w-full md:w-[30%]'>Vision</h1>
                  <div className='w-full md:w-[60%] flex flex-col gap-5'>
                    <p className='text-base sm:text-xl'>
Sit etiam est, nunc sollicitudin malesuada tincidunt senectus venenatis, adipiscing nulla vel diam, lorem donec sit blandit nec tortor, diam cras ut velit nulla purus ullamcorper ornare elit bibendum augue.</p> </div>
              </div> 
            </div>
      
    </div>
      <div className='min-h-[100px] mx-4 sm:mx-6 md:mx-10 pt-10 md:pt-20 pb-5  flex flex-col justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center px-4'>See how your shoes are made</h1>
            <p className='text-base sm:text-xl text-center px-4 sm:px-10 lg:px-40  py-5'>Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>
            <div className='flex flex-col lg:flex-row justify-center items-center px-4 md:px-10'>
              <div className='flex flex-col w-full max-w-[300px] pt-10 px-5 text-center lg:text-left'>
                  <p className='text-[#f6aa28] py-4 font-semibold  tracking-wide'>01.</p>
                  <h3 className='text-2xl sm:text-3xl font-semibold  tracking-wide'>Pet canvas</h3>
                  <p className='text-base sm:text-lg/7  text-gray-400 font-semibold mb-10'>Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
             
                  <hr className='text-gray-300' />
                 <p className='text-[#f6aa28] py-4 font-semibold mt-10  tracking-wide'>02.</p>
                  <h3 className='text-2xl sm:text-3xl/8 font-semibold  tracking-wide mb-3'>Algae foam + vegan glue</h3>
                  <p className='text-base sm:text-lg/7 text-gray-400 font-semibold mb-10'>Enim tincidunt donec vulputate magna pharetra mattis in</p>
             
             
              </div>
              <div className='w-full max-w-md lg:max-w-none'>
                  <img src={img7} alt="" className='w-full' />
              </div>
               <div className='flex flex-col w-full max-w-[300px] pt-10 px-5 text-center lg:text-end'>
                  <p className='text-[#f6aa28] py-4 font-semibold  tracking-wide'>03.</p>
                  <h3 className='text-2xl sm:text-3xl font-semibold  tracking-wide'>Organic cotton</h3>
                  <p className='text-base sm:text-lg/7 pb-4 text-gray-400 font-semibold mb-10'>A vel ipsum, sed dignissim elementum ultrices amet</p>
             
                  <hr className='text-gray-300' />
                 <p className='text-[#f6aa28] py-4 font-semibold mt-10  tracking-wide'>04.</p>
                  <h3 className='text-2xl sm:text-3xl/8 font-semibold  tracking-wide mb-3'>Upcycled plastic bottles</h3>
                  <p className='text-base sm:text-lg/7 text-gray-400 font-semibold mb-10'>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus estn</p>
             
             
              </div>
          
            </div>
           
              <div className='flex flex-col lg:flex-row px-4 md:px-10 mt-10 md:mt-20 mb-10 md:mb-20 gap-8 w-full'>
            
                  <div className='w-full lg:w-[60%]  '>
 <p className='text-base sm:text-xl font-semibold text-gray-400 '>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
                  </div>
                  <div className='w-full lg:w-[40%]'>
<div className='flex flex-wrap justify-center gap-6 md:gap-10  '>
                  <img src={i1} alt="" className='h-16 w-auto' />
                  <img src={i2} alt="" className='h-16 w-auto' />

                  <img src={i3} alt="" className='h-16 w-auto' />

              </div>
                  </div>
              </div>
          </div>
    <Footer />
    </>
  )
}

export default OurStory
