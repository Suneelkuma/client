import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchAds() {
  const [ads, setAds] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [userData, setuserData] = useState("");
  const [show,setShow]=useState(false)
  const navigate = useNavigate();
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
     setShow(true)
    
    
    } catch (error) {
      console.log(error);
           navigate('/register')
    }
    }
    useEffect(() => {
    callAboutPage();//cannot use async function inside useeffect
    });
  const fetchData = async () => {
    try {
      const response = await fetch(`/search?keyword=${keyword}`);
      const data = await response.json();
      console.log(data);
      setAds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
  if (keyword !== '') {
    fetchData();
  }
    // fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };

  const imageURLS='https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  return (
    <div className='container mt-5' >
      <form onSubmit={handleSearch}>
        <input className='m-2' type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" className='btn btn-primary'>Search</button>
      </form>
      <ul>
        {ads.map((ad, index) => (
          <li key={index}>
            <h2>{ad.headline}</h2>
            <p>{ad.description}</p>
            <p>{ad.CTA}</p>
           
            <img src="" alt="Ad" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAds;

