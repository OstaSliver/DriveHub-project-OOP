import React, { useState } from 'react';
import Navbar from '../components/Navbar';


function Home() {
    const bgImgUrl = 'https://img.goodfon.com/original/1921x1081/f/ca/doroga-car-mashina-osen-les-peizazh-noch-colorful-dark-for-1.jpg';

    return (
        <div
            style={{
                backgroundImage: `url(${bgImgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                opacity: 1, // Adjust the opacity value (0.5) for the desired opacity
            }}
        >


            <Navbar />
            <TabsForRent />
            <HowGood />
        
        </div>
    );
}

const TabsForRent = () => {
    const [activeTab, setActiveTab] = useState('rentOnYourOwn');
    const [pickupLocation, setPickupLocation] = useState('');


    return (
        <div className="container mx-auto px-30 text-center py-10">
            <h1 className="text-3xl font-bold text-white" >ค้นหารถเช่าราคาถูกที่สุด</h1>
            <p className="text-white text-overline">จาก 500 กว่าบริษัทรถเช่าทั่วประเทศ</p>
            <div className="container mx-auto px-6 text-center py-7 bg-transparent rounded-lg">
            </div>
            <div className="container mx-auto px-6  text-center py-5 bg-white rounded-lg">
                <div className="flex justify-left space-x-8">
                    <button
                        className={`text-lg font-semibold  ${activeTab === 'rentOnYourOwn' ? 'text-blue-500' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('rentOnYourOwn')}
                    >
                        เช่ารถขับเอง
                    </button>



                    <button
                        className={`text-lg font-semibold ${activeTab === 'rentWithDriver' ? 'text-blue-500' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('rentWithDriver')}
                    >
                        เช่ารถพร้อมคนขับ
                    </button>
                </div>

                {activeTab === 'rentOnYourOwn' && (
                    <div className="mt-8 flex">
                        <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg">
                            <label className="block mb-2 text-sm font-semibold">จุดรับ-คืนรถ</label>
                            <select
                                type="text"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                            >
                                <option>ในใจเธอ</option>
                                <option>โรงเรียนฮอกวอสต์</option>
                                <option>Ecc ตึกมหัศจรรย์ เรียนทั้งวันความรู้เท่าเดิม</option>
                                <option>วัดปะล่ะ</option>
                            </select>
                        </div>

                        <div className="flex w-3 bg-transparent "></div>

                        <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg">
                            <label className="block mb-2 text-sm font-semibold">วัน-เวลารับรถคืนรถ</label>
                            เดี๋ยวมาทำ
                        </div>

                        <div className="flex w-3 bg-transparent "></div>

                        <button className="flex-auto bg-blue-500  px-0.1  rounded-lg text-white text-center">

                            ค้นหารถเช่า

                        </button>

                    </div>

                )}

                {activeTab === 'rentWithDriver' && (
                    <div className="mt-8 flex">
                        <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg">
                            <label className="block mb-2 text-sm font-semibold">จุดรับผู้โดยสาร</label>
                            <select
                                type="text"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                            >
                                <option>ในใจเธอ</option>
                                <option>โรงเรียนฮอกวอสต์</option>
                                <option>Ecc ตึกมหัศจรรย์ เรียนทั้งวันความรู้เท่าเดิม</option>
                                <option>วัดปะล่ะ</option>
                            </select>
                        </div>

                        <div className="flex w-3 bg-transparent "></div>

                        <div className="flex-auto w-64 bg-gray-100 p-4 rounded-lg">
                            <label className="block mb-2 text-sm font-semibold">วัน-เวลารับรถคืนรถ</label>
                            เดี๋ยวมาทำ
                        </div>

                        <div className="flex w-3 bg-transparent "></div>

                        
                        <button className="flex-auto bg-blue-500  px-0.1  rounded-lg text-white text-center">

                            ค้นหารถเช่า

                        </button>

                      
                    </div>
                    
                )}
            </div>
        </div>
    );

};

const HowGood = () => {
    return (
        <div className="container mx-auto bg-white" style={{maxWidth: "1920px", width: "100%", height: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{maxWidth: "1920px", width: "100%", height: "10vh"}}></div>
            <h3 className="text-3xl font-bold text-black mx-10 mb-4">เช่ารถกับไดร์ฟฮับ</h3>
            <p className="text-xl font-bold text-gray-500 mx-10 mb-8">เช่ารถกับเราดียังไง</p>
            <div className="flex justify-between w-full max-w-4xl">
                <div className="w-1/4 mx-4  p-4  text-center">
                <h4 className='text-xl font-bold'>ยกเลิกฟรี</h4>
               <p >แจ้งภายใน 72 ชั่วโมง</p>
                </div>
           
                <div className="w-1/4 mx-4  p-4 ">
                <h4 className='text-xl font-bold'>ไม่มีบัตรเครดิตก็เช่าได้</h4>
               <p className='text-left'>แค่ใช้เอกสารยืนยันเท่านั้น</p>
                </div>
                <div className="w-1/4 mx-4  p-4  text-center">
                <h4 className='text-xl font-bold'>เจ้าหน้าที่ดูแล</h4>
               <p className='text-left'>มีเจ้าหน้าที่ดูแลตลอดการเช่า</p>
                </div>
                <div className="w-1/4 mx-4  p-4  text-center">
                <h4 className='text-xl font-bold'>เปรียบเทียบราคา</h4>
               <p className='text-left'>เทียบราคารถเช่าทุกบริษัทได้ทันที</p>
                </div>
            </div>
        </div>
    );
};



export default Home;
