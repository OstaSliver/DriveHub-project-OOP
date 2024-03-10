import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function AddCar() {
    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                opacity: 1,
            }}
        >
            <Navbar />
            <div style={{ marginTop: '5%', marginLeft: '20%' }}> 
                <Link to="/" className="text-blue-500 hover:text-violet-600">Back to Homepage</Link>
            </div>
            <div className='h-full'>
                <div className='flex items-center justify-center ' style={{ marginTop: '5%', marginLeft: '20%', marginBottom: '5%', marginRight: '50%' }}>
                    <h1 className="text-4xl font-bold text-black w-full">เพิ่มรถให้เช่า</h1>
                </div>
            </div>
            <div className="flex " style={{marginLeft: '20%'}}>
                <AddPicture />
                <div className="flex" style={{marginLeft: '1%'}}>
                <CarForm_1 />
            </div>              
            </div>
            <div className='flex' style={{ marginTop: '5%', marginLeft: '20%'}}>
            <CarForm_2 />
            <CarForm_3 />
            </div>
        </div>
    );
}

const AddPicture = () => {
    return (
        <div className='bg-gray-300 rounded-lg flex flex-col  ' style={{ width: '400px', maxWidth: '80vw', height: '400px', padding: '15px' }}>
            <div className='w-full h-full border-dashed border-2 border-black rounded-lg flex flex-col items-center justify-center '>
                <h1 className='text-black text-center text-6xl'>+</h1>
                <br />
                <p className='text-black text-center'>*อัพโหลด</p>
                <p className='text-black text-center'>อย่างน้อย 1 รูป</p>
            </div>
        </div>
    );
};

const CarForm_1 = () => {
    return (
        <div className='ml-4'>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black font-bold mb-2">ชื่อ</label>
                    <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="model" className="block text-black font-bold mb-2">รุ่น</label>
                    <input type="text" id="model" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licensePlate" className="block text-black font-bold mb-2">ทะเบียนรถ</label>
                    <input type="text" id="licensePlate" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <label htmlFor="licensePlate" className="block text-black font-bold mb-2">พื้นที่รับ-ส่ง</label>
                <select id="deliveryArea" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                        <option value="">เลือกพื้นที่</option>
                        {/* Add your options here */}
                    </select>
      
                {/* Add more fields as needed */}
           
            </form>
        </div>
    );
};

const CarForm_2 = () => {
    return (
        <div className='ml-4'>
            <h1 className="text-2xl font-bold">รายละเอียด</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black font-bold mb-2">ประเภทรถ</label>
                    <input type="text" id="name" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="model" className="block text-black font-bold mb-2">จำนวนที่นั่ง</label>
                    <input type="text" id="model" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licensePlate" className="block text-black font-bold mb-2">ระบบเชื้อเพลิง</label>
                    <input type="text" id="licensePlate" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licensePlate" className="block text-black font-bold mb-2">จำนวนประตู</label>
                    <input type="text" id="licensePlate" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                
            </form>
        </div>
    );
};


const CarForm_3 = () => {
    return (
        <div className='ml-4'>
               <h1 className="text-2xl font-bold text-white"> .</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black font-bold mb-2">ระบบเกียร์</label>
                    <input type="text" id="name" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="model" className="block text-black font-bold mb-2">ประเภทเบาะ</label>
                    <input type="text" id="model" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licensePlate" className="block text-black font-bold mb-2">ความจุเครื่องยนต์</label>
                    <input type="text" id="licensePlate" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licensePlate" className="block text-black font-bold mb-2">จำนวนสัมภาระ</label>
                    <input type="text" id="licensePlate" className="w-full px-7 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                
            </form>
        </div>
    );
};


export default AddCar;
