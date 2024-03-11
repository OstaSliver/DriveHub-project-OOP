import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useAuth } from "../provider/AuthContext";

const Navbar = () => {
  const { auth, handleLogout } = useAuth();
  const [isDropdownOpenReservation, setIsDropdownOpenReservation] = useState(false);
  const [isDropdownOpenHelp, setIsDropdownOpenHelp] = useState(false);
  const [isDropdownOpenUser, setIsDropdownOpenUser] = useState(false);
  const dropdownRefReservation = useRef(null);
  const dropdownRefHelp = useRef(null);
  const dropdownRefUser = useRef(null);
  const buttonRefReservation = useRef(null);
  const buttonRefHelp = useRef(null);
  const buttonRefUser = useRef(null);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_user_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: localStorage.getItem('token') }),
        });
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setRole(data.role);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isDropdownOpenReservation && dropdownRefReservation.current && buttonRefReservation.current) {
      const buttonRect = buttonRefReservation.current.getBoundingClientRect();
      dropdownRefReservation.current.style.top = `${buttonRect.bottom}px`;
      dropdownRefReservation.current.style.left = `${buttonRect.left}px`;
    }
  }, [isDropdownOpenReservation]);

  useEffect(() => {
    if (isDropdownOpenHelp && dropdownRefHelp.current && buttonRefHelp.current) {
      const buttonRect = buttonRefHelp.current.getBoundingClientRect();
      dropdownRefHelp.current.style.top = `${buttonRect.bottom}px`;
      dropdownRefHelp.current.style.left = `${buttonRect.left}px`;
    }
  }, [isDropdownOpenHelp]);

  useEffect(() => {
    if (isDropdownOpenUser && dropdownRefUser.current && buttonRefUser.current) {
      const buttonRect = buttonRefUser.current.getBoundingClientRect();
      dropdownRefUser.current.style.top = `${buttonRect.bottom}px`;
      dropdownRefUser.current.style.left = `${buttonRect.left}px`;
    }
  }, [isDropdownOpenUser]);

  const toggleDropdownReservation = () => {
    setIsDropdownOpenReservation(prevState => !prevState);
  };

  const toggleDropdownHelp = () => {
    setIsDropdownOpenHelp(prevState => !prevState);
  };

  const toggleDropdownUser = () => {
    setIsDropdownOpenUser(prevState => !prevState);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link to="/" className="text-white font-bold">DRIVEHUB</Link>
        <div>
          <button
            ref={buttonRefReservation}
            id="dropdownDefaultButtonReservation"
            onClick={toggleDropdownReservation}
            className="text-white bg-transparent hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hoverbg-transparent"
            type="button"
          >
            เช่ารถกับ Drivehub
            <svg
              className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpenReservation ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div
            ref={dropdownRefReservation}
            id="dropdownReservation"
            className={`absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpenReservation ? 'block' : 'hidden'}`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonReservation">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เช่ารถ</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เช่ารถพร้อมคนขับ</a>
              </li>
            </ul>
          </div>

          <button
            ref={buttonRefHelp}
            id="dropdownHELP"
            onClick={toggleDropdownHelp}
            className="text-white bg-transparent hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hoverbg-transparent"
            type="button"
          >
            ความช่วยเหลือ
            <svg
              className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpenHelp ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div
            ref={dropdownRefHelp}
            id="dropdownHelp"
            className={`absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpenHelp ? 'block' : 'hidden'}`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHELP">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">วิธีจองรถ</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เอกสารการเช่ารถ</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ประกันภัย</a>
              </li>
            </ul>
          </div>
          <a href="#" className="text-white hover:text-gray-300">Line: @drivehub Tel: 02-038-5222</a>
        </div>
        <div>
          {auth ? (
            <div className="flex flex-col justify-center">
              <div>
                <button
                  ref={buttonRefUser}
                  id="dropdownUser"
                  onClick={toggleDropdownUser}
                  className="text-white bg-transparent hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hoverbg-transparent"
                  type="button"
                >
                  {name}
                  <svg
                    className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpenUser ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div
                  ref={dropdownRefUser}
                  id="dropdownUser"
                  className={`absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpenUser ? 'block' : 'hidden'}`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUser">
                    {role === 'customer'&& (
                      <>
                        <li>
                          <Link to="/reservation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">รายการจอง</Link>
                        </li>
                        <li>
                          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">โปรไฟล์</Link>
                        </li>
                        <li>
                          <Link to="/logout" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ออกจากระบบ</Link>
                        </li>
                      </>
                    )}
                    {role === 'lender'&& (
                      <>
                        <li>
                          <Link to="/addcar" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เพิ่มรถ</Link>
                        </li>
                        <li>
                          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">โปรไฟล์</Link>
                        </li>
                        <li>
                          <Link to="/logout" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ออกจากระบบ</Link>
                        </li>
                      </>
                      )}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/register" className="text-white hover:bg-gray-500 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hoverbg-transparent">Register</Link>
              <Link to="/login" className="text-white hover:bg-gray-500 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hoverbg-transparent ml-4">Login</Link>
            </div>
          )}

        </div>


      </div>

    </nav>
  );
};

export default Navbar;
