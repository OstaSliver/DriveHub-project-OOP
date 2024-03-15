import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const ReservationDetail = () => {
    const [isRented, setIsRented] = useState(true);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center font-semibold text-3xl mt-16 mb-5">
                <h1>รายละเอียดการเช่ารถ</h1>
            </div>

            {isRented ? (
                <div className="flex justify-center w-full h-full flex-col">
                    <div className="flex justify-center  ">
                        <div className="flex flex-col h-1/2 w-1/2  rounded-lg p-8 mt-5 mb-12 border-black border-2  hover:shadow-2xl hover:scale-105">
                            <div className="flex mt-2 justify-start">
                                <img
                                    src="https://i.ytimg.com/vi/bCXiyhNKR5s/maxresdefault.jpg"
                                    width="250px"
                                    height="250px"
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col ml-5">
                                    <p className="font-medium text-xl">ชื่อรถ</p>
                                    <p className=" text-slate-500">ชื่อคนให้เช่า </p>
                                    <p className=" text-green-500">จองแล้ว</p>
                                    <p>วันที่จอง : 15/02/2588</p>
                                    <p>วันที่คืนรถ : 15/02/2588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center  ">
                        <div className="flex flex-col h-1/2 w-1/2  rounded-lg p-8 mt-1 mb-12 border-black border-2  hover:shadow-2xl hover:scale-105">
                            <div className="flex mt-2 justify-start">
                                <img
                                    src="https://i.ytimg.com/vi/bCXiyhNKR5s/maxresdefault.jpg"
                                    width="250px"
                                    height="250px"
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col ml-5">
                                    <p className="font-medium text-xl">ชื่อรถ</p>
                                    <p className=" text-slate-500">ชื่อคนให้เช่า </p>
                                    <p className=" text-green-500">จองแล้ว</p>
                                    <p>วันที่จอง : 15/02/2588</p>
                                    <p>วันที่คืนรถ : 15/02/2588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center  ">
                        <div className="flex flex-col h-1/2 w-1/2  rounded-lg p-8 mt-1 mb-12 border-black border-2  hover:shadow-2xl hover:scale-105">
                            <div className="flex mt-2 justify-start">
                                <img
                                    src="https://i.ytimg.com/vi/bCXiyhNKR5s/maxresdefault.jpg"
                                    width="250px"
                                    height="250px"
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col ml-5">
                                    <p className="font-medium text-xl">ชื่อรถ</p>
                                    <p className=" text-slate-500">ชื่อคนให้เช่า </p>
                                    <p className=" text-green-500">กำลังใช้งาน</p>
                                    <p>วันที่จอง : 15/02/2588</p>
                                    <p>วันที่คืนรถ : 15/02/2588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : <div className="flex justify-center w-full h-full">
                <div className="flex justify-center h-1/2 w-1/2 bg-slate-100 rounded-lg p-8">
                    <div className="flex flex-col">
                        <h1 className="text-2xl mt-5">ยังไม่มีการจอง</h1>
                        <Link to="/" className="bg-blue-500 rounded-lg text-xl text-white font-bold py-2 px-4 mt-5 flex justify-center">เช่าเลย</Link>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ReservationDetail;