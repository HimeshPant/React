import React from 'react'

const Students = (props) => {
  return (
    <div>
           <div>
        <h1>{props.name}</h1>
        <h2>{props.class}</h2>
        <h1>{props.college}</h1>
  
    </div>
    </div>
  )
}

export default Students
