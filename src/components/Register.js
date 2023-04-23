import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'



export default function Register() {
    const navigate=useNavigate();
    const [user,setUser]=useState({name:"",email:"" ,password:""})
  
    let name,value ;
  const handleChange=(e)=>{
    console.log(value);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }
  
  
  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
  //   let {name,email,phone,work,password}=user;
  //   const res=await fetch("/registers",{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify({name,email,phone,work,password}
  //     )
  //   });
  //   const data=await res.json();
  //   if(data.status==422||!data){
  //     window.alert("Invalid Credentials");
  //     console.log("invalid registration");
  //   }else{
  //     window.alert("Registration Successfull");
  //     console.log("registered");
  //     navigate("/signin")
  //   }
  // }
   const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email,  password} = user; //object destructuring
    const res = await fetch("/registers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //when sending data  to a web server ,the data has to be a string
        name,
        email,
       
        password,
         //as key and value pair is same ,no need to write it twice.
      }),
    });
  
   
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("INVALID REGISTRATION");
      console.log(`INVALID REGISTRATION`);
    } else {
      window.alert(" REGISTRATION SUCCESSFULL");
      console.log(` REGISTRATION SUCCESSFULL`);
  
      navigate("/signin"); //if registration is sucessfull then it will redirect us to login page
    }
  };
  
    return (
      <div className='container' style={{backgroundColor:"skyblue",margin:"20px 10px 4px 280px",width:"60%",height:"40%", border:"1px solid black"}}>
        <form method='POST' className="row g-3">
          <h1 >SignUp</h1>
        <div className="row-md-4">
      <label htmlFor="name" className="form-label">Name</label>
      <input name='name' value={user.name} type="name" className="form-control" id="name" onChange={handleChange}/>
    </div>
    <div className="row-md-2 my-4">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="text" name='email' value={user.email} className="form-control" id="email" onChange={handleChange}/>
    </div>
    
    
    <div className="row-md-2 my-4">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="text" name='password' value={user.password} className="form-control" id="password" onChange={handleChange}/>
    </div>
    <button  type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
  
    <h4>Already have an account
      <span> <Link  to="/signin">Login</Link></span>
    </h4>
    
    </form>
      </div>
    )
}

