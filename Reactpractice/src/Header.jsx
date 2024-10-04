import React from 'react'
import './App.css'

const Header = () => {
  return (
    <div id="header">
        <h1>LOgo</h1>
        <input type="search" placeholder="search here"></input>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            </ul>
            <input type="button" placeholder="sign in"></input>
            <input type="button" placeholder="sign up"></input>

    </div>
  )
}

export default Header