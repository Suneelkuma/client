import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, 
        password,
      }),
    });

   
    

    const data = res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Invalid Credentials");
    } else {
        // dispatch({type:"USER",payload:true})//type mtlb jo action perform karne jaa rahe hai..  payload mtlb extra information (all will be checked in Usereducer.js) from where we will change its state
      window.alert("Login Successful");
      navigate("/");
    }
  };


  return (
    <div className='container' style={{backgroundColor:"skyblue",margin:"20px 10px 20px 280px",width:"60%", border:"1px solid black"}}>
      <form className="row g-3">
      <h1 >Login</h1>
  <div className="row-md-2 my-4">
    <label htmlFor="email" className="form-label">Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name='email' className="form-control" id="email"/>
  </div>
  
  
  <div className="row-md-2 my-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" name='password' className="form-control" id="password"/>
  </div>
  <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button>

  <p>Don't have a account register here <span><Link to="/register">Create an account</Link></span></p>
  
  </form>
    </div>
  )
}

export default Signin
