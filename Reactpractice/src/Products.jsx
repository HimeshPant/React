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
        <H5>{PROPS.is_in_inventory}</H5>
        


    </div>
  )
}

export default Products

