import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
const CheckoutForm = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const license = params.get('license');
    const locationName = params.get('location');
    const startDate = params.get('start_date');
    const endDate = params.get('end_date');
    const token = localStorage.getItem('token');

    const [isLoading, setIsLoading] = useState(false);

    const handleConfirmation = async () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/make_reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                    license,
                    location: locationName,
                    start_date: startDate,
                    end_date: endDate
                })
            });
            if (response.ok) {
                console.log('Reservation confirmed successfully');
            } else {
                console.error('Failed to confirm reservation:', response.statusText);
            }
        } catch (error) {
            // Handle error
            console.error('Failed to confirm reservation:', error);
        } finally {
            setIsLoading(false); // Ensure isLoading is always set to false, even on error
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center h-screen bg-slate-100">
                <div className="w-1/2 mt-3 bg-white-100 ">
                    <h2 className="text-center"> กรอกข้อมูลของคุณ</h2>
                    <form className="space-y-4 mt -5 p-10">
                        <div>
                            <label className="block text-black font-semibold mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="อ้วนมาก"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="อ้วนระยะสุดท้าย"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">
                                Email (for document contact)
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">
                                +66 Phone Number
                            </label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="0812345678"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">
                                Additional Details (if any)
                            </label>
                            <textarea
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows="4"
                                placeholder="ข้อมูลเพิ่มเติม (หากมี)"
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="international-rental"
                                name="international-rental"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                            <p className="ml-6"> ยืนยันข้อมูลถูกต้อง</p>
                            <label
                                htmlFor="international-rental"
                                className="ml-3 block text-sm font-medium text-white"
                            ></label>
                        </div>
                        <div className="flex justify-start">
                            <button
                                onClick={handleConfirmation} 
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
                            >
                                Submit
                            </button>

                        </div>
                    </form>
                </div>
                <div className="w-1/2 flex mt-3 ">
                    <div className="w-1/2">
                        <div className="flex flex-col bg-white px-3 rounded-lg">
                            <div>
                                <h1 className="text-center"> รายละเอียดรถ</h1>
                            </div>
                            <div className="flex mt-4 justify-start ">
                                <img
                                    src="https://i.ytimg.com/vi/bCXiyhNKR5s/maxresdefault.jpg"
                                    width="125px"
                                    height="125px"
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col ml-5">
                                    <p>ชื่อรถ</p>
                                    <p>ระบบเกียร์</p>
                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                        </div>
                        <div className="flex flex-col mt-5 bg-white px-3 rounded-lg">
                            <div>
                                <h1 className="text-center"> เวลารับรถคืนรถ </h1>
                            </div>
                            <div className="flex mt-4 justify-start ">
                                <img
                                    src="https://img2.pic.in.th/pic/Screenshot-2567-03-13-at-00.11.30.jpeg"
                                    width="100px"
                                    height="100px"
                                    className="rounded-lg"
                                />
                                <div className="ml-5">
                                    <p>รับรถ</p>
                                    <p>บิลเลี่ยน</p>
                                    <p>15/5/2000</p>


                                    <p>คืนรถ</p>
                                    <p>บิลเลี่ยน</p>
                                    <p>18/5/2000</p>

                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                        </div>
                        <div className="flex flex-col mt-5 bg-white px-3 rounded-lg">
                            <div>
                                <h1 className="text-center"> ร้านค้า</h1>
                            </div>
                            <div className="flex mt-4 justify-start  ">
                                <img
                                    src="https://i.ytimg.com/vi/bCXiyhNKR5s/maxresdefault.jpg"
                                    width="150px"
                                    height="150px"
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col ml-5">
                                    <p>ชื่อร้าน</p>

                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                        </div>
                        <div className="flex mt-5 bg-white px-3 rounded-lg">
                            <div>
                                <h1 className=""> ข้อมูลคนเช่า</h1>
                            </div>
                            <div className="flex  justify-start  ">
                                <div className="flex flex-col ml-5">
                                    <p>ชื่อ</p>
                                    <p>อีเมล</p>
                                    <p>เบอร์</p>
                                    <p>ข้อมูลเพิ่มเติม</p>
                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col mt-5 p-5">
                        <div className="bg-white rounded-lg text-center mb-2">
                            <h1>มีคน 0 คน กำลังรอเช่ารถคันนี้</h1>
                        </div>

                        <div className="bg-white rounded-lg text-center mt-3 mb-2">
                            <h1 className="mt-2">คูปองหรือโค้ดส่วนลด</h1>
                            <form className="space-y-4  p-10">
                                <div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="โค้ด"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-5 w-full px-6 py-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
                                    >
                                        ใช้โค้ด
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white rounded-lg text-center mt-3 mb-2 pb-5">
                            <h1 className="mt-2">สรุปรายละเอียด</h1>
                            <div className="flex flex-col">
                                <h1 className="mt-2">ชำระในวันรับรถ</h1>
                                <div className="flex justify-between flex-row px-5 py-2">
                                    <h1 className="mt-2">ค่าเช่ารถ 1 วัน</h1>
                                    <h1 className="mt-2">$600</h1>
                                </div>
                                <div className="flex justify-between flex-row px-5 py-2">
                                    <h1 className="mt-2">ค่ารับส่ง</h1>
                                    <h1 className="mt-2">ฟรี</h1>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="mt-2">ค่ามัดจำ</h1>
                                <div className="flex justify-between flex-row px-5 py-2">
                                    <h1 className="mt-2">ค่ามัดจำ</h1>
                                    <h1 className="mt-2">$600</h1>
                                </div>
                            </div>
                            <div className="flex flex-col px-5">
                                <h1 className="mt-2">ชำระตอนนี้</h1>
                                <div className="flex justify-between flex-row px-5 py-2 border-2 border-emerald-500 rounded-lg">
                                    <h1 className="mt-2">ชำระตอนนี้</h1>
                                    <h1 className="mt-2">$0</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;