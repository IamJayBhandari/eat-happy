// import React, { useState } from 'react'
// import { FaHeart, FaStar } from 'react-icons/fa'
// import { useFoodContext } from '../../context/foodContext'
// import { useEffect } from 'react'
// import Foods from './Foods'
// import axios from 'axios'

// const NewFoods = () => {
//     const [newfood,setNewFood] = useState([])
//     const { food,setFood} = useFoodContext()
//     const getFoods = async () => {
//         try{
//          const res = await axios.get(`http://localhost:8000/api/v1/food/getNeWFoods`)
//                if(res.data.success) {
//                 setNewFood(res.data.data.food)
             
//                }
//         } catch (error){
//          console.log(error)
//         }
//          }
//          console.log(newfood)
//          useEffect(()=>{
//            getFoods()
//          },[newfood])
//   return (
//      <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
//     <div className="container mx-auto py-[2vh]">
//         <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
//         New <span className="text-[#f54748]">Foods</span>
//         </div>
//         <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
//             {
//                 newfood?.map(curElem=><Foods curElem={curElem}/>)
//             }
//         </div>
      
//         </div>
//     </div>

//   )
  

// }

//new
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Foods from './Foods';
import { useFoodContext } from '../../context/foodContext';


const NewFoods = () => {
    const [newfood, setNewFood] = useState([]);
    const { setFood } = useFoodContext();

    const getFoods = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/food/getNeWFoods?category=all`);
            if (res.data.success) {
                setNewFood(res.data.data.food);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFoods();
    }, []);

    return (
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
                    New <span className="text-[#f54748]">Foods</span>
                </div>
                <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {newfood.map(curElem => <Foods key={curElem._id} curElem={curElem} />)}
                </div>
            </div>
        </div>
    );
};










{/* <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
<div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://th.bing.com/th/id/OIG1.IAQkslc2ATPGcrZChZNg?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        Pizza
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaStar size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div>
<div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://i.ibb.co/jMxb2GC/i5.png" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        IceCream
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaStar size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div><div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://i.ibb.co/jMxb2GC/i5.png" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        IceCream
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaStar size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div><div className="food-card bg-red-500/10 rounded-xl  flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://i.ibb.co/jMxb2GC/i5.png" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        IceCream
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaHeart size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div>

<div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://th.bing.com/th/id/OIP.9uhmV4jwLHvK2S6PCnzbIwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        RedBull
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaStar size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div>  <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
    <div className="relative mb-3">
        <img src="https://th.bing.com/th/id/OIP.miqYYnHbWpNG0UPsBo6VyAHaHa?w=680&h=680&rs=1&pid=ImgDetMain" alt="hi"  />
        <div className="absolute top-2 left-2">
            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            </button>

        </div>
        <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹20</div>
            </button>
        </div>
    </div>
    <div className="flex gap-4 items-center">
    <p className="text-xl text-center font-bold text-[#f54748]">
        IceCream
    </p>
    <div className="flex text-sm space-x-2 cursor-pointer">
        <span className="font-normal text-[#fdc55e]">4.3</span>
        <FaStar size={16} className='text-[#fdc55e]'/>
        <span className="font-medium">(4)</span>
    </div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

</div> */}
   

export default NewFoods
