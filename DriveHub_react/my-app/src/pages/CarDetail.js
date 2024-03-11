import React from 'react';
import Navbar from '../components/Navbar';
import RatingForm from '../components/review';

const InformationPage = () => {

    const carInfo = {
        imageUrl: 'https://car-images.bauersecure.com/wp-images/3695/maserati-mc20-lead.jpg',
        name: 'Maserati MC20',
        model: '2022',
        price: '฿990',
        owner: 'Sorrasak Limthong',
        review: '4.7 ',
        seats: '5',
        fuelSystem: 'Gasoline',
        doors: '4',
        transmission: 'Automatic',
        seatType: 'Leather',
        engineCapacity: '3.0L V6',
    };

    const handleReservation = () => {
      
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="text-6xl font-bold">{carInfo.name}</h1>
                    <p className="text-gray-500 mb-5 text-2xl">{`รุ่น: ${carInfo.model}`}</p>
                    <img className=" rounded-lg scale-100" style={{marginRight:'10%', marginLeft:'10%', width:'75%'}} src={carInfo.imageUrl} alt="Car" />
                </div>

                <div className="container mx-auto mt-10 ml-40 ">
                    <div className="w-1/6 flex text-left">
                        <div>

                            <div className='pl-20' >

                                <p className='text-gray-500 text-ml' >{`ประเภทรถ: `}</p>
                                <p className='text-2xl mb-7'>{`${carInfo.model}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-ml'>จำนวนที่นั่ง:</p>
                                <p className='text-2xl mb-7'>{`${carInfo.seats}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-ml'>{`ระบบเชื้อเพลิง:`}</p>
                                <p className='text-2xl mb-7'>{`${carInfo.fuelSystem}`}</p>
                                <div style={{marginBottom:'10%'}}></div>
                                <p className='text-gray-500 text-ml'>{`จำนวนประตู:`}</p>
                                <p className='text-2xl'>{`${carInfo.doors}`}</p>
                            </div>
                    </div>

                    <div className="w-3/6  ml-40  text-left"> 
                            <p className='text-gray-500 text-ml '>{`ระบบเกียร์: `}</p>
                            <p className='text-2xl mb-7'>{`${carInfo.transmission}`}</p>
                            <div style={{marginBottom:'10%'}}></div>
                            <p className='text-gray-500 text-ml'>{`ประเภทเบาะ: `}</p>
                            <p className='text-2xl mb-7'>{`${carInfo.seatType}`}</p>
                            <div style={{marginBottom:'10%'}}></div>
                            <p className='text-gray-500 text-ml'>{`ความจุเครื่องยนต์: `}</p>
                            <p className='text-2xl mb-7'>{`${carInfo.engineCapacity}`}</p>
                        </div>
                    <div className='' style={{paddingLeft:'38rem'}}>
                    <p className="text-gray-500 mt-40  text-red-600 text-6xl mb-5">{` ${carInfo.price}`}</p>

            
                        <button
                            onClick={handleReservation}
                            className="px-4 py-2 pl-12 pr-12 text-white rounded-full bg-gradient-to-r from-blue-500 to-pink-400 hover:scale-125 focus:outline-none"
                        >
                            เช่าเลย !
                        </button>
    
                        
                    </div>
                </div>
            </div>

            <div className="justify-center mt-8">
                <div className="pl-12 items-center rounded-lg bg-gray-100 p-4">
                    <div>
                        <p className='text-2xl'>{`รีวิวร้านเช่า ${carInfo.owner}`}</p>
                    </div>
                    
                </div>
                 {/* <p className='text-5xl mt-8 ml-10' style={{marginLeft:'48%'}}>&#11088;{` ${carInfo.review}`}</p>  */}

                <RatingForm/>
                

            </div>
        </div>
        </div >
    );
};



export default InformationPage;
