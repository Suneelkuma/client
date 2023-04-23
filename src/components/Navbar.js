import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
<nav className=" navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Brand App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto ">
      
       
      <li className="nav-item">
          <Link className="nav-link" to="/searchads">SearchAds</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
       
        
       
      </ul>
     
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar
