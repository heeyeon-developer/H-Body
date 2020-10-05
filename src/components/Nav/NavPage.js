import React from 'react'
import { Link } from 'react-router-dom'
import './NavPage.css'
function NavPage() {
    return (
      <div>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Gym">
              Gym
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/Training">Traingin</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/Diet">Diet</Link>
          </li>
          <li>
           <Link style={{textDecoration: 'none', color: 'black'}} to="/BMI">BMI</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/Login">Login</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/Register">Register</Link>
          </li>
        </ul>
      </div>
    );
}

export default NavPage
