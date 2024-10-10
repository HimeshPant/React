import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dume = () => {
  
    const [state,setState]=useState([])
    function getData(){
        axios.get("https://dummyjson.com/products").then((response)=>{
            setState(response.data)
        })
     

        }
        useEffect(()=>{
            getData();
        
        })
    

  return (
    <div id="dumy">
        {
        state.map((h)=>{
            return(
                <div>
                    <h1>{h.title}</h1>
                    <h3>{h.category}</h3>
                    <h2>{h.price}</h2>
                    
                </div>
            )
})
        }
    </div>
  )
}
  

export default Dume