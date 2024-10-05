import React from 'react'
import Product from './Product.json'
import Products from './Products.jsx'
import './App.css'
import Ren from './Ren.json'
import Rend from './Rend.jsx'
import Header from './Header.jsx'
import Student from './Student.json'
import Students from './Students.jsx'

const App = () => {
  return (
    
    <div id="main">
      <Header/>
      <div id="Dati">
        {Student.map((h)=>{
          return(
            <Students name={h.name} class={h.class} college={h.college} />
          )
        })}
      </div>
    <div id="parent">
      {Product.map((e)=>{
      return(
        <Products img={e.image} title={e.title} price={e.price}  description={e.discription}  /> )
        })}
        {Ren.map((e)=>{
          return(
            <Rend img={e.imageURL} nam={e.name} brand={e.brand} gender={e.gender} category={e.category}/>
          )
        })}
    
    </div>
    </div>
  )
}

export default App