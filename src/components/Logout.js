import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
  const navigate = useNavigate();

  const callLogoutPage = async () => {
    try {
      const response = await fetch('/logout', {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include"
      });

      if (!response.status!==200) {
        throw new Error(response.statusText);
      }

      navigate('/register', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callLogoutPage();
  }, []);

  return (
    <div>
      <h1>User is logged out</h1>
    </div>
  )
}

export default Logout
