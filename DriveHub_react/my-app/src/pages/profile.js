import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../provider/AuthContext";
import { useNavigate } from "react-router-dom";

function profile() {
  return (
    <div 
    style={{
      backgroundColor: 'whitesmoke',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      opacity: 1,
  }}>
     <Navbar />
     </div>
  );

}

export default profile;
