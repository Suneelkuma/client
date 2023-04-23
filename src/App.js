import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Signin from "./components/Signin";

import Home from "./components/Home";
import Logout from "./components/Logout";
import Register from "./components/Register";
import SearchAds from "./components/Search";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
<Route  path="register" element={<Register/>}/>
      <Route exact path="searchads" element={<SearchAds/>} />
          <Route exact path="signin" element={<Signin />} />
<Route exact path="logout" element={<Logout/>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
