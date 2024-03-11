import React from 'react';
import Navbar from '../components/Navbar';
import RatingForm from '../components/review';

const InformationPage = () => {
    // Sample data
    const carInfo = {
        imageUrl: 'https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg',
        name: 'Maserati MC20',
        model: '2022',
        price: '$200,000',
        owner: 'John Doe',
        review: '4.7 ',
        // Add more car details here
        seats: '5',
        fuelSystem: 'Gasoline',
        doors: '4',
        transmission: 'Automatic',
        seatType: 'Leather',
        engineCapacity: '3.0L V6',
    };

    const handleReservation = () => {
        // Logic for handling reservation
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="text-2xl font-bold">{carInfo.name}</h1>
                    <p className="text-gray-500 mb-5">{`รุ่น: ${carInfo.model}`}</p>
                    <img className=" rounded-lg scale-75" style={{marginRight:'10%', marginLeft:'10%'}} src={carInfo.imageUrl} alt="Car" />
                </div>

                <div className="container mx-auto mt-8 ">
                    <div className="grid grid-cols-3 gap-4 text-left">
                        <div>

                            <div className='pl-20 ' >

                                <p className='text-gray-500 text-sm' >{`ประเภทรถ: `}</p>
                                <p>{`${carInfo.model}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-sm'>จำนวนที่นั่ง:</p>
                                <p>{`${carInfo.seats}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-sm'>{`ระบบเชื้อเพลิง:`}</p>
                                <p>{`${carInfo.fuelSystem}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-sm'>{`จำนวนประตู:`}</p>
                                <p>{`${carInfo.doors}`}</p>
                            </div>
                    </div>

                    <div> 
                            <p className='text-gray-500 text-sm'>{`ระบบเกียร์: `}</p>
                            <p >{`${carInfo.transmission}`}</p>
                            <div style={{marginBottom:'10%'}}></div>
                            <p className='text-gray-500 text-sm'>{`ประเภทเบาะ: `}</p>
                            <p>{`${carInfo.seatType}`}</p>
                            <div style={{marginBottom:'10%'}}></div>
                            <p className='text-gray-500 text-sm'>{`ความจุเครื่องยนต์: `}</p>
                            <p>{`${carInfo.engineCapacity}`}</p>
                        </div>
                    <div>
                        
                        <h2 className="text-lg font-bold mb-2">Reservation</h2>
                        <button
                            onClick={handleReservation}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                        >
                            Reserve Now
                        </button>
                        <h2 className="text-lg font-bold mb-2">Price</h2>
                        <p className="text-gray-500 ">{`Price: ${carInfo.price}`}</p>

                    </div>
                </div>
            </div>

            <div className="justify-center mt-8">
                <div className="pl-12 items-center rounded-lg bg-gray-100 p-4">
                    <div>
                        <p className='text-2xl'>{`รีวิวร้านเช่า ${carInfo.owner}`}</p>
                    </div>
                    
                </div>
                <p className='text-3xl mt-8 ml-10'>&#11088;{` ${carInfo.review}`}</p>

                <RatingForm/>
                

            </div>
        </div>
        </div >
    );
};



export default InformationPage;
