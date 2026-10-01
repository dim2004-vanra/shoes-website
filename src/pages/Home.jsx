import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import bg1 from '../assets/bg-1.jpg'
import img1 from '../assets/image-1.svg'
import img2 from '../assets/image-2.svg'
import img3 from '../assets/image-3.svg'
import img4 from '../assets/image-4.svg'
import img5 from '../assets/image-5.svg'
import img6 from '../assets/image-6.jpg'
import img7 from '../assets/img-7.png'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import bg2 from '../assets/bg-2.jpg'
import bg3 from '../assets/bg-3.jpg'
import img8 from '../assets/img-8.jpg'
import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import i3 from '../assets/i3.svg'
import i4 from '../assets/i4.jpg'
import i5 from '../assets/i5.jpg'
import i6 from '../assets/i6.jpg'
import Footer from '../components/Footer'
import { useContext } from 'react';
import { mycontext } from '../context/Productdata';








const Home = () => {

  const products = useContext(mycontext);
  console.log(products);
  

  return (
    <>
    <script src="https://kit.fontawesome.com/YOUR_KIT_CODE.js"></script>
    <div className='min-h-[100px] bg-white overflow-x-hidden'>
      <div className='h-[420px] sm:h-[520px] md:h-[650px] lg:h-[750px]  py-5  mx-4 sm:mx-6 md:mx-10 box-border bg-cover bg-center'  style={{ backgroundImage: `url(${bg1})`}}>
      <div className='flex w-full max-w-xl lg:max-w-2xl  px-4 sm:px-8 md:px-10 py-8 sm:py-16 md:py-20'>
       <div className='mt-8 sm:mt-16 md:mt-[80px] text-white'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[1.2]  font-semibold tracking-wide'>LOVE THE PLANET WE WALK ON</h1>
          <p className='py-4 text-sm sm:text-base'>Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <NavLink to="/men"><button className='bg-white text-black px-4 py-2 font-semibold hover:bg-gray-600 w-full sm:w-auto' >SHOP MEN</button></NavLink>
            <NavLink to="/women"><button  className='bg-white text-black px-4 py-2 font-semibold hover:bg-gray-600 w-full sm:w-auto'>SHOP WOMEN</button></NavLink>
            
          </div>


       </div>

      </div>
    </div>
    <div className='min-h-[100px] px-4 sm:px-5 py-8 sm:py-10 bg-white w-full flex flex-wrap justify-center gap-4 sm:gap-8 items-center'>
      <p className='text-center font-semibold w-full sm:w-auto'>Also seen in:</p>
      <img src={img1} alt="" className='h-6 sm:h-auto' />
      <img src={img2} alt="" className='h-6 sm:h-auto' />
      <img src={img3} alt="" className='h-6 sm:h-auto' />
      <img src={img4} alt="" className='h-6 sm:h-auto' />
      <img src={img5} alt="" className='h-6 sm:h-auto' />

    </div>
    <hr  className='mx-4 sm:mx-6 md:mx-10'/>
    <div className='min-h-[100px]  py-10 md:py-20 flex flex-col lg:flex-row justify-center bg-white mx-4 sm:mx-6 md:mx-10 '>
      <div className='w-full max-w-2xl py-5'>
        <img src={img6} alt=""  className='w-full'/>
      </div>
      <div className='w-full max-w-2xl  m-4 sm:m-8 lg:m-[80px] box-border flex flex-col justify-center '>
          <p className=' text-[#f6aa28] font-semibold tracking-widest px-2 py-2'>About Us</p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold px-2 py-2'>Selected materials designed for comfort and sustainability</h1>
          <p className='text-base sm:text-lg md:text-xl leading-relaxed md:leading-[35px]  px-3 py-2'>Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
          <NavLink  className='hover:decoration-black text-md underline decoration-2 decoration-[#f6aa28] tracking-wider   px-3 py-2'  to="/ourstory"> READ MORE</NavLink>
      </div>

    </div>
      <div className='min-h-[100px] mx-4 sm:mx-6 md:mx-10 pt-10 md:pt-20 pb-5 bg-red-100 flex flex-col justify-center items-center'>
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
      
      </div>
      <div className='min-h-[100px] flex flex-col px-4 sm:px-6 md:px-10 pb-10'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-3 pt-10 md:pt-20 '>
            <h2 className='text-2xl sm:text-3xl font-semibold'>Our Best Seller</h2>
            <NavLink className='text-base sm:text-xl tracking-wide underline decoration-2 decoration-[#f6aa28] hover:decoration-black ' to="/collection">View All Best Sellers</NavLink>
        </div>

        <div className='min-h-[100px] flex flex-wrap gap-6 pt-10 justify-center items-center text-center'>
          {products.map((p) => (
           p.id <=  6 ? (
               <div className='w-full max-w-sm sm:w-[calc(50%-12px)] lg:w-[380px] pb-10 ' key={p.id}> 
              <NavLink to={`/productdetails/${p.id}`}><img src={p.image} alt="" className='w-full' /></NavLink>
              <NavLink to={`/productdetails/${p.id}`}><h2 className='text-xl font-bold pt-5 '>{p.name}</h2></NavLink>
              <p className='text-xl text-gray-400 font-semibold'>{p.price}.00</p>
          </div> 
            ) : "" 
            
            
          ))}
          
        </div>
      </div>
      <div className='min-h-[100px] flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 px-4 sm:px-6 md:px-10 pb-10'>
          <div className='w-full md:flex-1 min-h-[320px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bg2})`}} >
              <h1 className='text-white text-4xl font-semibold py-5'>Men</h1>
              <NavLink to="/men"><button className='px-7 py-3 outline-2 text-white  text-md font-semibold hover:bg-white hover:text-gray-700'>SHOP MEN</button></NavLink>
          </div>
          <div className='w-full md:flex-1 min-h-[320px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bg3})`}} >
             <h1 className='text-white text-4xl font-semibold py-5'>Women</h1>
              <NavLink to="/women"><button className='px-7 py-3 outline-2 text-white  text-md font-semibold hover:bg-white hover:text-gray-700'>SHOP WOMEN</button></NavLink>
   
          </div>
      </div>
      <div className='min-h-[100px] flex flex-col px-4 sm:px-6 md:px-10 pb-10'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-3 pt-10 md:pt-20 '>
            <h2 className='text-2xl sm:text-3xl font-semibold'> New Arrival</h2>
            <NavLink className='text-base sm:text-xl tracking-wide underline decoration-2 decoration-[#f6aa28] hover:decoration-black ' to="/collection">View All New Arrivals</NavLink>
        </div>

       
        <div className='min-h-[100px] flex flex-wrap gap-6 pt-10 justify-center items-center text-center'>
          {products.map((p) => (
           p.id >=  6 && p.id <=14 ? (
               <div className='w-full max-w-sm sm:w-[calc(50%-12px)] lg:w-[380px] pb-10 ' key={p.id}> 
              <NavLink to={`/productdetails/${p.id}`}><img src={p.image} alt="" className='w-full' /></NavLink>
              <NavLink to={`/productdetails/${p.id}`}><h2 className='text-xl font-bold pt-5 '>{p.name}</h2></NavLink>
              <p className='text-xl text-gray-400 font-semibold'>{p.price}.00</p>
          </div> 
            ) : "" 
            
            
          ))}
          
        
          
        </div>
      </div>
       <div className='min-h-[100px] mx-4 sm:mx-6 md:mx-10 pt-10 md:pt-20 pb-5 bg-red-50 flex flex-col-reverse lg:flex-row  justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col p-6 md:p-10 lg:pr-20'>
              <p className='text-base sm:text-xl font-semibold text-gray-400 '>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
           
              <div className='flex flex-wrap justify-center gap-6 md:gap-10 pt-10 md:pt-20 '>
                  <img src={i1} alt="" className='h-16 w-auto' />
                  <img src={i2} alt="" className='h-16 w-auto' />

                  <img src={i3} alt="" className='h-16 w-auto' />

              </div>
            </div>
            <div className='w-[30%] h-[800px]lg:w-1/2 flex flex-col justify-center items-center p-6'>
                <img src={img8} alt="" width="300px" height="300px" className='rounded-full border-dashed border-[3px] w-full max-w-md' />
            </div>
       </div>
       <div className='min-h-[100px] mb-10 flex flex-col mx-4 sm:mx-6 md:mx-10 pt-10 md:pt-20 justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-semibold px-4'>Our Customers speak for us</h1>
       
          <div className='flex flex-col md:flex-row justify-center gap-5 px-2 sm:px-5 py-10 w-full'>
            <div className='w-full md:w-1/3  flex flex-col border border-gray-500'>
             
                <h3 className='text-xl font-semibold px-5 py-5'>“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”</h3>
                <div className='flex justify-center'>
                    <div className='w-[20%] px-3 py-3 '> 
                        <img src={i4} alt="" className='rounded-full' />
                    </div>
                    <div className='w-[80%] px-3 py-4 text-start'>
                      <h2  className='text-lg'>	Julia Keys</h2>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/3  flex flex-col border border-gray-500'>
             
                <h3 className='text-xl font-semibold px-5 py-5'>“Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus ”</h3>
                <div className='flex justify-center'>
                    <div className='w-[20%] px-3 py-3 '> 
                        <img src={i5} alt="" className='rounded-full' />
                    </div>
                    <div className='w-[80%] px-3 py-4 text-start'>
                      <h2  className='text-lg'>		
Luis Adrian</h2>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/3  flex flex-col border border-gray-500'>
             
                <h3 className='text-xl font-semibold px-5 py-5'>“Tortor suspendisse tincidunt accumsan platea pellentesque hac.”
</h3>
                <div className='flex justify-center'>
                    <div className='w-[20%] px-3 py-3 '> 
                        <img src={i6} alt="" className='rounded-full' />
                    </div>
                    <div className='w-[80%] px-3 py-4 text-start'>
                      <h2  className='text-lg'>	
Maria Anna</h2>
                    </div>
                </div>
            </div>
          </div>
          <h3 className='text-lg text-gray-400 font-semibold'>4.8 average rating from 1814 reviews</h3>
       </div>
      <Footer />
    </div>
    </>
  )
}

export default Home
