  import React,{ useState } from 'react'
  import { useContext } from 'react';
  import { mycontext } from '../context/Productdata';
  import { Form, useParams, NavLink} from "react-router-dom";
  import Footer from '../components/Footer';


  const Productdetails = () => {

    const [products] = useContext(mycontext)

 const [count,setCount] = useState(1);
  let parameter = useParams();
      
     const [ ,men ] = useContext(mycontext);
      const [, ,women] = useContext(mycontext)
    let data = [];
      let [newdata] = products.filter((p) => p.id == parameter.id)
  
      if(newdata.gender == "Men"){
        data = [men[0],men[1],men[3]]
      }
    
     else{
      data = [women[0],women[1],women[2]]
     }
       
      
        
        
    return (
      
      <>
          <div className='bg-red-50 min-h-[100px] py-6 md:py-12'>
            <div className='min-h-[100px] bg-white mx-4 sm:mx-6 md:mx-12 px-4 sm:px-6 md:px-10 py-6 md:py-10'>
              <div className='flex flex-col lg:flex-row gap-6 md:gap-10'>
                  <div className='w-full lg:w-1/2 px-0 md:px-5 '>
                    <img src={newdata.image} alt="" className='w-full h-auto' />
                  </div>
                  <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
                      <p className='text-xl py-3 '>{newdata.category},{newdata.gender}</p>
                      <h1 className='text-3xl font-semibold'>{newdata.name}</h1>
                      <div className='flex flex-wrap items-center gap-2'>
                        <span className='text-2xl sm:text-3xl text-gray-300 py-5 line-through '>${newdata.oldPrice}0 </span> <span className='text-2xl sm:text-3xl   text-gray-700'>${newdata.price}.00</span><span className='text-base sm:text-xl text-gray-400'> &{newdata.shipping}</span>
                      </div>
                      <p className='text-xl text-gray-400 tracking-wider'>{newdata.description}</p>
                     
                      <span> <button className='text-md font-semibold px-2 py-2 border border-gray-400 w-[10%]' onClick={() => {setCount(count > 1 ? count - 1 : 1 )}}>-</button>
                        <button className='text-md font-semibold px-2 py-2 border w-[10%] border-gray-400 '>{count}</button>
                      <button className='text-md font-semibold px-2 py-2 border w-[10%] border-gray-400 mr-3' onClick={() => {setCount( count + 1)}}>+</button>
                      <button className='text-md text-white font-semibold tracking-widest bg-[#6e7051] w-[200px]  px-4 py-2  hover:bg-black'>ADD TO CART</button></span>
                      <hr  className='text-gray-300'/>
                      <p className='text-xl text-gray-400'>Categories: <span className='text-gray-800'> {newdata.category}, {newdata.gender}</span></p>
                      <fieldset className='border py-5  border-gray-300 border-solid'>
                        <legend className='text-xl text-center'>Guaranteed Safe Checkout</legend>
                      </fieldset>
                  </div>
                 
              </div>
              <hr className='mt-5 text-gray-300'/>
              <div className='min-h-[100px] '>
                  <div className='flex gap-4'>
                    <button className='text-xl text-gray-900 py-3' ><NavLink>Description</NavLink></button>
                  <button className='text-xl text-gray-900 py-3'><NavLink>Review</NavLink></button>
                
                  </div>
                  <div className='flex flex-col gap-5 text-xl text-gray-400 tracking-wide '>
                  <p>Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.</p>
                  <p>Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.</p>
                  <p>Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.</p>
              
                 
                  </div>
                 </div>
              <div className='min-h-[100px] flex flex-wrap gap-4  pt-10 justify-start items-start text-center'>
               <div className='w-full'>
                   <h1 className='text-3xl font-semibold text-start py-3'>Related products</h1>
               </div>
               
                {data.map((p) => (
                 <div className='w-full max-w-sm sm:w-[calc(50%-16px)] lg:w-[380px] pb-10 px-2 sm:px-5' key={p.id}> 
                    <NavLink to={`/productdetails/${p.id}`}><img src={p.image} alt="" className='w-full' /></NavLink>
                    <NavLink to={`/productdetails/${p.id}`}><h2 className='text-xl font-bold pt-5 '>{p.name}</h2></NavLink>
                    <p className='text-xl text-gray-400 font-semibold'>{p.price}.00</p>
                </div> 
                    
 
                ))}
                </div>
              </div>
              </div>
      
        <Footer /> 
      </>
    )
  }

  function description(){
    return (
      <>
         <div className='flex flex-col gap-5 text-xl text-gray-400 tracking-wide '>
                  <p>Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.</p>
                  <p>Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.</p>
                  <p>Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.</p>
              
                 
                  </div>

      </>
    )
  }
  export default Productdetails
