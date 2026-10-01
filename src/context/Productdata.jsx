import React from 'react'
import { createContext } from 'react'

export const mycontext = createContext();  

const Productdata = (props) => {

    
const products = [
  {
    id: 1,
    name: "Women's Blue Training",
    category: "Training",
    gender: "Women",
    oldPrice: 69.90,
    price: 60.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003.jpg",
    description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 2,
    name: "Men's Red Running",
    category: "Running",
    gender: "Men",
    oldPrice: 79.90,
    price: 65.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001.jpg",
    description: "Comfortable running shoes designed for everyday training and active lifestyles.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 3,
    name: "Women's Candy City Run",
    category: "Running",
    gender: "Women",
    oldPrice: 74.90,
    price: 62.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004.jpg",
    description: "Lightweight and stylish running shoes with excellent comfort for daily use.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 4,
    name: "Men's Green Training",
    category: "Training",
    gender: "Men",
    oldPrice: 69.90,
    price: 59.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002.jpg",
    description: "A comfortable training shoe made for workouts, walking and everyday activities.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 5,
    name: "Women's White Walking",
    category: "Walking",
    gender: "Women",
    oldPrice: 64.90,
    price: 55.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005.jpg",
    description: "Soft and comfortable walking shoes perfect for long walks and casual outings.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 6,
    name: "Men's Blue Sport",
    category: "Sport",
    gender: "Men",
    oldPrice: 84.90,
    price: 70.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006.jpg",
    description: "Sporty shoes offering excellent support, comfort and durability.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 7,
    name: "Women's Pink Training",
    category: "Training",
    gender: "Women",
    oldPrice: 72.90,
    price: 61.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007.jpg",
    description: "Stylish training shoes with a lightweight design and comfortable fit.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 8,
    name: "Men's Black Running",
    category: "Running",
    gender: "Men",
    oldPrice: 89.90,
    price: 75.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008.jpg",
    description: "High-performance running shoes designed for comfort and daily exercise.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 9,
    name: "Women's Green Sport",
    category: "Sport",
    gender: "Women",
    oldPrice: 79.90,
    price: 68.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-009.jpg",
    description: "Modern sports shoes designed with comfort and everyday performance in mind.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 10,
    name: "Men's White Training",
    category: "Training",
    gender: "Men",
    oldPrice: 74.90,
    price: 63.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010.jpg",
    description: "Clean and simple training shoes suitable for gym workouts and casual wear.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 11,
    name: "Women's Black Running",
    category: "Running",
    gender: "Women",
    oldPrice: 82.90,
    price: 69.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011.jpg",
    description: "Comfortable running shoes with a flexible sole for active women.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 12,
    name: "Men's Orange Training",
    category: "Training",
    gender: "Men",
    oldPrice: 76.90,
    price: 64.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012.jpg",
    description: "Bright and comfortable training shoes made for active lifestyles.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 13,
    name: "Women's Purple Sport",
    category: "Sport",
    gender: "Women",
    oldPrice: 85.90,
    price: 72.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013.jpg",
    description: "Sport shoes offering a comfortable fit and stylish modern design.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 14,
    name: "Men's Grey Walking",
    category: "Walking",
    gender: "Men",
    oldPrice: 68.90,
    price: 57.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014.jpg",
    description: "Everyday walking shoes designed for comfort during long hours.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 15,
    name: "Women's Yellow Running",
    category: "Running",
    gender: "Women",
    oldPrice: 78.90,
    price: 66.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015.jpg",
    description: "Lightweight running shoes that provide comfort and flexibility.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 16,
    name: "Men's Navy Sport",
    category: "Sport",
    gender: "Men",
    oldPrice: 91.90,
    price: 78.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg",
    description: "Durable sport shoes designed for training, exercise and outdoor activities.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 17,
    name: "Women's Grey Training",
    category: "Training",
    gender: "Women",
    oldPrice: 70.90,
    price: 58.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017.jpg",
    description: "Simple and comfortable training shoes for gym and everyday activities.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 18,
    name: "Men's Brown Walking",
    category: "Walking",
    gender: "Men",
    oldPrice: 73.90,
    price: 60.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018.jpg",
    description: "Comfortable walking shoes with a durable design for everyday use.",
    shipping: "Free Shipping",
    sale: true
  },

  {
    id: 19,
    name: "Women's Red Sport",
    category: "Sport",
    gender: "Women",
    oldPrice: 88.90,
    price: 74.00,
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019.jpg",
    description: "Stylish sports shoes designed to provide comfort and reliable support.",
    shipping: "Free Shipping",
    sale: true
  },


];

 const men = [];
  const women = [];
  products.map((p) =>{  
      if( p.gender == 'Men'){
        men.push(p);
       
      }
      if( p.gender == 'Women'){
        women.push(p);
  
      }
    })

    console.log(men);
    
  

  return (
    <mycontext.Provider value={[products, men , women]}>
      {props.children}
    </mycontext.Provider >
  )
}

export default Productdata
