import React from 'react'
import './App.css'

const Products = (props) => {
  return (
    <div id="product">
        <img src={props.img}/>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
        <h3>{props.discription}</h3>
        <h4>{props.category}</h4>
        <h5>{props.rate}</h5>
        <h5>{props.count}</h5>
        
        


    </div>
  )
}

export default Products

