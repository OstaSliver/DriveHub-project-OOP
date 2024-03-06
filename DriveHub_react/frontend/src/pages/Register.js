import Navbar from "../components/Navbar";
import React, { useState } from "react";

function Register() {
  const bgImgUrl =
    "https://img.goodfon.com/original/1921x1081/f/fd/rimac-nevera-rimac-nevera-blue-car-fast.jpg";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password_confirmation, setPassword_confirmation] = useState("");

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // function fecck
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: `${email}`,
      Name: `${firstName} ${lastName}`,
      Phone_Number: tel,
      Password: "123456",
      Contact_info: "Contact_info",
      Role: "customer",
    };
    if (Password === Password_confirmation) {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.status == 401) {
          console.log("Email already exists");
          alert("Email already exists");
        }

        if (response.status == 200) {
          console.log("Registered Successfully");
          alert("Registered Successfully");

          const responseData = await response.json();
          localStorage.setItem("token", responseData.token);
          window.location.href = "/Home";
        }
      };

      fetchData();
    } else {
      alert("Password and Confirm Password are not the same");
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        opacity: 1,
      }}
    >
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div
        className={`container mx-auto mt-8 opacity-90 ${
          isNavbarOpen ? "z-0" : "z-10"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tel"
            >
              Tel
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tel"
              type="tel"
              placeholder="Phone Number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              value={Password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
