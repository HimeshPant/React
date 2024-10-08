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
        state.map((i)=>{
            return(
                <div>
                    <h1>{i.title}</h1>
                    <h3>{i.category}</h3>
                    <h2>{i.price}</h2>
                </div>
            )
})
        }
    </div>
  )
}
  

export default Dume