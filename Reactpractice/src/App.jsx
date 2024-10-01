import React from 'react'
import Product from './Product.json'
import Products from './Products.jsx'
import './App.css'

const App = () => {
  return (
    <div id="parent">
      {Product.map((e)=>{
      return(
        <Products img={e.image} title={e.title} price={e.price}  description={e.discription}  /> )
    })}
    </div>
  )
}

export default App