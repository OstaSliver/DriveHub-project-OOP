import React, { useState ,useEffect} from "react";
import Navbar from "../components/Navbar";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SearchResultPage = () => {
 
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(null); // เปลี่ยนเป็น null เพื่อให้มันเป็นวัตถุ Dayjs ตอนเริ่มต้น
  const [returnDate, setReturnDate] = useState(null); // เปลี่ยนเป็น null เพื่อให้มันเป็นวัตถุ Dayjs ตอนเริ่มต้น
  const [availableCar, setAvailableCar] = useState("0");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedPickupLocation = localStorage.getItem("pickupLocation");
    if (storedPickupLocation) {
      setPickupLocation(storedPickupLocation);
    }
    
    const storedPickupDate = localStorage.getItem("pickupDate");
    if (storedPickupDate) {
      setPickupDate(dayjs(storedPickupDate)); // แปลงข้อมูลที่อ่านมาจาก LocalStorage เป็น Dayjs
    }
    
    const storedReturnDate = localStorage.getItem("returnDate");
    if (storedReturnDate) {
      setReturnDate(dayjs(storedReturnDate)); // แปลงข้อมูลที่อ่านมาจาก LocalStorage เป็น Dayjs
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const dummyData = [
    {
      id: 1,
      title: "ชื่อ",
      description: "รุ่น",
      imageUrl:
        "https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg",
      price: "Available",
      review: "Good",
    },
    {
      id: 2,
      title: "ชื่อ",
      description: "รุ่น",
      imageUrl:
        "https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg",
      price: "Reserved",
      review: "Excellent",
    },
    {
      id: 3,
      title: "ชื่อ",
      description: "รุ่น",
      imageUrl:
        "https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg",
      price: "Available",
      review: "Average",
    },
  ];

  const handleSearch = () => {
    const results_car = [];
    if (pickupLocation === "" || pickupDate === "" || returnDate === "") {
      alert("Please fill in all fields");
    } else {
      // console.log(pickupLocation);
      // console.log(formatDate(pickupDate));
      // console.log(formatDate(returnDate));
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/search_car", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ location: pickupLocation, pickupdate: formatDate(pickupDate), returndate: formatDate(returnDate) }),
          });
          const data = await response.json();

          setSearchResults(data.car.map((car, index) => ({
            id: index + 1,
            title: car.Name,
            description: car.Model,
            imageUrl: "https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg",
            price: car.price,
            review: "Good",
          })));

          setAvailableCar(data.car.length);

          ;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  };


  return (
    <div>
      <Navbar />

      <div className="mt-8 ">
        <div
          className="mt-8 flex "
          style={{ marginLeft: "10%", marginTop: "2%", marginRight: "10%" }}
        >
          <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg">
            <label className="block mb-2 font-semibold">จุดรับ-คืนรถ</label>
            <select
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full mt-6 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            >
              <option>select</option>
              <option>พระเทพ</option>
              <option>ECC</option>
              <option>ตึกโหล</option>
              
            </select>
          </div>

          <div className="flex w-3 bg-transparent "></div>
          <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg flex flex-col">
            <div>
              <label className="block mb-2 font-semibold">
                วัน-เวลารับรถคืนรถ
              </label>
            </div>
            <div className="flex ">
              <div className="flex flex-col w-1/2 mr-3">
                {" "}
                <p>วันรับรถ</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={pickupDate}
                    onChange={(text) => setPickupDate(text)}

                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col w-1/2 mr-3 ">
                {" "}
                <p>วันคืนรถ</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={returnDate}
                    onChange={(text) => setReturnDate(text)}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="flex w-3 bg-transparent "></div>
        </div>
      </div>
      <div style={{ marginLeft: "10%", marginTop: "2%", marginRight: "10%" }}>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full w-full hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div
        className="pb-30"
        style={{ marginLeft: "25%", marginTop: "2%", marginRight: "20%" }}
      >
        <div className="flex items-center mb-4">
          <h1 className="text-2xl text-bold">
            ผลการค้นหา: รถว่างทั้งหมด {availableCar} คัน
          </h1>
        </div>

        <div className="max-w-full mx-auto">
          <div>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div
                  key={result.id}
                  className="h-48 w-full border-black border-2 flex pl-2 rounded-xl shadow-yellow-400 hover:shadow-2xl mb-4"
                >
                  <div className="mt-2 mb-2 w-1/3">
                    <img
                      className="rounded-xl object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                      src={result.imageUrl}
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
                      {result.title}
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
                      {result.description}
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
                        ราคา:
                      </h1>
                      <h1
                        style={{
                          textAlign: "left",
                          fontWeight: "500",
                          fontSize: "100%",
                          paddingTop: "2%",
                        }}
                        className="text-black"
                      >
                        {result.price}
                      </h1>
                    </div>
                    <p
                      style={{
                        textAlign: "left",
                        fontWeight: "500",
                        fontSize: "100%",
                        paddingTop: "2%",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    >
                      Review: {result.review}
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-400 hover:to-green-400 w-auto pl-10 pr-10 rounded-full mt-5">
                      รายละเอียดรถเช่า
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
