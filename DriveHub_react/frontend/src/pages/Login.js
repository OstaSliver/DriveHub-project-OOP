import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

function Login() {
  const bgImgUrl = 'https://img.goodfon.com/original/1920x1080/c/8b/car-space-planet-blue-black.jpg?d=1';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    const data = {
      email: `${email}`,
      password: `${password}`,
    };

    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // if (response.status == 401) {
      //   console.log("Email already exists");
      //   alert("Email already exists");
      // }

      if (response.status == 200) {
        console.log("Registered Successfully");
        alert("Registered Successfully");
        window.location.href = "/Home";
      }
    };

    fetchData();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div 
    style={{
      backgroundImage: `url(${bgImgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      opacity: 1,
  }}>

      <Navbar />
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImgUrl})` }}>
        <div className='containerbg-transparent  w-full py-10'></div>
        <div className="flex justify-center items-center">
          <div className="max-w-md w-full p-8 bg-white bg-opacity-90 shadow-lg rounded-md ">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handlePasswordChange}
                  required
                />
                
                <Link to="/register" className="text-blue-500 hover:text-violet-600">Don't have an account? Register Here</Link>
              </div>
              <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600 bg-gradient-to-r from-blue-500 to-pink-500">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;