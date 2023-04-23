import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const [userData, setuserData] = useState("");
 
  const navigate = useNavigate();
 const handleOnclick=()=>{
  navigate('/searchads')
 }


const callAboutPage = async () => {
try {
  const res = await fetch('/about', {
    method: "GET",
    headers:{
      Accept:"application/json",//for accepting token
    
    },
    credentials:"include"//for token
  });



    const data = await res.json();//data contains all the data of the user

 setuserData(data.name);



} catch (error) {
  console.log(error);
       navigate('/register')
}
}
useEffect(() => {
callAboutPage();//cannot use async function inside useeffect
});
  return (
    <>
     {/* <div className="App" style={{margin:"auto",color:"blue",fontSize:"32px"}}>Hello {userData}</div> */}
     <div className="card container mt-4" style={{width: "18rem"}}>

  <div className="card-body">
    <h5 className="card-title" style={{color:"blue",fontSize:"32px"}}>Hello {userData}</h5>
  
    <a href="#" className="btn btn-primary" onClick={handleOnclick}>Go To Search</a>
  </div>
</div>
      </>
    
     

      
    
  )
}

export default Home
