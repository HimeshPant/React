import React from 'react'
import './App.css'

const Students = (props) => {
  return (
    <div id="stu">

       <img src='../public/imagemm.jpg'></img>
        <h1>{props.name}</h1>
        <h2>{props.class}</h2>
        <h1>{props.college}</h1>
        

  
    
    </div>
  )
}

export default Students
