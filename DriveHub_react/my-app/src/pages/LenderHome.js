import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";
import { collapseClasses } from "@mui/material";
function LenderHome() {
  const [name, setName] = useState('');
  const { auth, handleLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    const storedName = localStorage.getItem("name");
    const storedRole = localStorage.getItem("role");
    if (storedName&&storedRole==='lender') {
      setName(storedName);
      console.log(name)
    } else {
      handleLogout();
      navigate('/login')
    }
  }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/get_user_token", {
//         method: "POST",
//         headers: {oat
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token: localStorage.getItem("token") }),
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.role !== "lender") {
//         handleLogout();
//         navigate("/login");
//       } else {
//         setName(data.name);
//         localStorage.setItem("name", data.name);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       handleLogout();
//       navigate("/");
//     }
//   };

  // if (!auth || !localStorage.getItem("token")) {
  //   navigate("/login");
  //   return null; // ให้เรียกใช้งาน useEffect อีกครั้งเมื่อได้ทำการ navigate ไปยังหน้า login
  // }

  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "25%", marginTop: "7%" }}>
        <h1 className="text-6xl text-bold bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text">
          สวัสดี, {name}
        </h1>
      </div>
      <YourCarsSection />
    </div>
  );
}

const YourCarsSection = () => {
  return (
    <div>
      <h1
        className="text-4xl text-bold"
        style={{ marginLeft: "25%", marginTop: "5%" }}
      >
        Your Cars
      </h1>
      <h1
        className="text-2xl text-bold text-gray-500"
        style={{ marginLeft: "25%", marginTop: "2%" }}
      >
        คุณมีรถที่ลงทะเบียนไว้แล้ว 3 คัน
      </h1>

      <div
        className="pb-30"
        style={{ marginLeft: "25%", marginTop: "2%", marginRight: "20%" }}
      >
        <div className="h-48 w-full border-black border-2 flex pl-2 rounded-xl shadow-yellow-400 hover:shadow-2xl ">
          <div className="mt-2 mb-2 w-1/3">
            <img
              className="rounded-xl object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
              src="https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg"
              alt="Car"
            />
          </div>
          <div className="mt-2 ml-6">
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "120%",
                paddingTop: "5%",
              }}
            >
              Toyota Yaris 2016
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "100%",
                paddingTop: "2%",
                color: "gray",
              }}
            >
              {" "}
              รุ่น 1.2 J
            </h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                  color: "gray",
                  marginRight: "10px",
                }}
              >
                สถานะการจอง:
              </h1>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                }}
                className="text-red-600"
              >
                ยังไม่ถูกจอง
              </h1>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-400 hover:to-green-400 w-auto pl-10 pr-10 rounded-full mt-5 ">
              แก้ไขข้อมูล
            </button>
          </div>
        </div>
      </div>

      <div
        className="pb-30"
        style={{ marginLeft: "25%", marginTop: "2%", marginRight: "20%" }}
      >
        <div className="h-48 w-full border-black border-2 flex pl-2 rounded-xl shadow-yellow-400 hover:shadow-2xl ">
          <div className="mt-2 mb-2 w-1/3">
            <img
              className="rounded-xl object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
              src="https://static.vecteezy.com/system/resources/thumbnails/021/535/289/small/round-button-for-web-icon-photo-add-button-banner-round-badge-interface-for-application-illustration-on-white-background-vector.jpg"
              alt="Car"
            />
          </div>
          <div className="mt-2 ml-6">
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "120%",
                paddingTop: "5%",
              }}
            >
              {" "}
              ชื่อ{" "}
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "100%",
                paddingTop: "2%",
                color: "gray",
              }}
            >
              {" "}
              รุ่น{" "}
            </h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                  color: "gray",
                  marginRight: "10px",
                }}
              >
                สถานะการจอง:
              </h1>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                }}
                className="text-red-600"
              >
                ยังไม่ถูกจอง
              </h1>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-400 hover:to-green-400 w-auto pl-10 pr-10 rounded-full mt-5 ">
              แก้ไขข้อมูล
            </button>
          </div>
        </div>
      </div>
      <div
        className="pb-30"
        style={{ marginLeft: "25%", marginTop: "2%", marginRight: "20%" }}
      >
        <div className="h-48 w-full border-black border-2 flex pl-2 rounded-xl shadow-yellow-400 hover:shadow-2xl ">
          <div className="mt-2 mb-2 w-1/3">
            <img
              className="rounded-xl object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
              src="https://static.vecteezy.com/system/resources/thumbnails/021/535/289/small/round-button-for-web-icon-photo-add-button-banner-round-badge-interface-for-application-illustration-on-white-background-vector.jpg"
              alt="Car"
            />
          </div>
          <div className="mt-2 ml-6">
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "120%",
                paddingTop: "5%",
              }}
            >
              ชื่อ
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontWeight: "500",
                fontSize: "100%",
                paddingTop: "2%",
                color: "gray",
              }}
            >
              {" "}
              รุ่น{" "}
            </h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                  color: "gray",
                  marginRight: "10px",
                }}
              >
                สถานะการจอง:
              </h1>
              <h1
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "100%",
                  paddingTop: "2%",
                }}
                className="text-green-700"
              >
                จองแล้ว{" "}
              </h1>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-400 hover:to-green-400 w-auto pl-10 pr-10 rounded-full mt-5 ">
              แก้ไขข้อมูล
            </button>
          </div>
        </div>
        <div className="h-40 w-full "></div>
      </div>
    </div>
  );
};

export default LenderHome;
