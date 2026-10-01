import React, { useRef } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { mycontext } from '../context/Productdata';



const Data = (props) => {
  
  const [products] = useContext(mycontext);
  const [ ,men ] = useContext(mycontext);
  const [, ,women] = useContext(mycontext);
  
  let data = [];
  if(props.name == 'Men'){
     data = [...men]
  }
  else if(props.name == "Women"){
      data = [...women]
  }
  else{
    data = [...products]
  }
console.log(data);
  

  const btn = useRef()

const changehtml = () => {
  
  return ( 
    <>
    
    </>
  )
  
}
 
    
  return (
    <>
            <div className='bg-red-50 min-h-[100px] py-6 md:py-12'>
          <div className='min-h-[100px] bg-white mx-4 sm:mx-6 md:mx-12 px-4 sm:px-6 md:px-10 py-6 md:py-10'>
              <h1 className='text-4xl sm:text-5xl md:text-7xl text-[#6e7051] font-semibold mb-10 md:mb-20'> {props.name}  </h1>
              <div className='flex flex-col lg:flex-row lg:justify-between gap-4'>
                  <div className='flex flex-col sm:flex-row gap-4 '>
                      <button ref={btn} onClick={changehtml} className='bg-[#6e7051] px-4 font-semibold'>FILTER SHOES</button>
                      <p className='text-base sm:text-xl px-0 sm:px-4 py-2 text-gray-500'>Showing All {data.length} Results</p>
                  </div>
                  <div>
                  <select name="" id="" className='w-full sm:w-[200px] text-lg sm:text-xl text-gray-500 focus:outline-none'>
                      <option value="" >Default Sorting</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>

                  </select>
              </div>
              </div>
             
                <div className='min-h-[100px] flex flex-wrap gap-4 pt-10 justify-center lg:justify-start items-start text-center'>
                {data.map((p) => (
                
                    
                     <div className='w-full max-w-sm sm:w-[calc(50%-8px)] lg:w-[380px] pb-10 ' key={p.id}> 
                    <NavLink to={`/productdetails/${p.id}`}><img src={p.image} alt="" className='w-full' /></NavLink>
                    <NavLink to={`/productdetails/${p.id}`}><h2 className='text-xl font-bold pt-5 '>{p.name}</h2></NavLink>
                    <p className='text-xl text-gray-400 font-semibold'>{p.price}.00</p>
                </div> 
 
                ))}
                </div>

               
             
          </div>
      </div>
      <Outlet />
    </>
  )
}


export default Data

