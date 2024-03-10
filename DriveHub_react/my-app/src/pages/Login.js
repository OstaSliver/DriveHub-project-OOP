import React, { useState , useContext , useEffect} from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useAuth  } from '../provider/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
const { setAuth , setRole} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement authentication logic (e.g., API call)
    const isLoginSuccessful = true; // Simulate successful login

    if (isLoginSuccessful) {
      setRole('lender')
      setAuth(true);
      navigate('/');
    } else {
      console.error('Login failed:'); // Log error message
      // Handle failed login scenario (e.g., display error message)
    }
  };

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
              <button  type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600 bg-gradient-to-r from-blue-500 to-pink-500">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
}

export default Login;
