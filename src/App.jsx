import React from 'react'
import Path from './routes/Path'
import Productdata from './context/Productdata'


const App = () => {
  return (
    <>
     <Productdata>
       <Path />
     </Productdata>
    </>
  )
}

export default App
