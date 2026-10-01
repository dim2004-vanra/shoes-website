import React from 'react'
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Collection from '../pages/Collection';
import Lookbook from '../pages/Lookbook';
import Sale from '../pages/Sale';
import OurStory from '../pages/OurStory';
import Contact from '../pages/Contact';
import Productdetails from '../components/Productdetails';



import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Navbar from "../components/Navbar";




let routing = createBrowserRouter([
    {
        path:'/',
        element : <Navbar />,
        children: [
            {path:'/' ,element: <Home />},
            {path : '/men' ,element : <Men/>},
            {path : '/women' , element : <Women />},
            {path : '/collection' , element: <Collection />},
            {path : '/lookbook' , element: <Lookbook />},
            {path : '/sale' , element: <Sale />},
            {path : '/ourstory' , element: <OurStory />},
            {path : '/contact' , element: <Contact />},
            {path : '/productdetails/:id' ,element:<Productdetails />},
         
        ]
    }
])

const Path = () => {
  return (
    <RouterProvider  router={routing}></RouterProvider>
  )
}

export default Path
