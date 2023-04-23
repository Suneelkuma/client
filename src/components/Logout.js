import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'; 
const Logout = () => {

    const navigate=useNavigate();
const callLogoutPage=async()=>{
    const res = await fetch('/logout', {
        method: "GET",
        headers:{
          Accept:"application/json",//for accepting token
        
        },
        credentials:"include"//for token
      })

 

      .then((res)=>{
        navigate('/signin',{replace:true})
        if(res.status!==200){
            const error=new Error(res.error);
            throw error;
        }
      }).catch((err)=>{
        console.log(err);
      })
     
      
}


    useEffect(() => {
        callLogoutPage();//cannot use async function inside useeffect
        },);
  return (
    <div>
     <h1>user is logout</h1>
    </div>
  )
}

export default Logout
