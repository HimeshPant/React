import React from 'react'

const Rend = (props) => {
  return (
    <div id="ren">
        <img src={props.img}/>
        <h1>{props.nam}</h1>
        <h2>{props.brand}</h2>
        <h3>{props.gender}</h3>
        <h3>{props.category}</h3>
        <h3>{props.price}</h3>
        <h3>{is_in_inventory}</h3>
        {/* <h3>{featured}</h3> */}

    </div>
  )
}

export default Rend