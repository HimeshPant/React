import React, { useEffect, useState } from 'react'
import axios from "axios"

const Loader = () => {
    const [state,setState]=useState([]);
    function getData(){
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setState(response.data)
            // console.log(response.data);
        })

    }
    useEffect(()=>{
        getData();

    })
  return (
    <div id="Loader">
             {
                state.map((e)=>{
                    return(
                        <div>
                        <h1>{e.title}</h1>
                        <img src={e.image} />
                        <h2>{e.price}</h2>
                        <h5>{e.description}</h5>
                 </div>   
                )
                })
             }
    </div>
  )
}

export default Loader