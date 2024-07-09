// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaHeart, FaStar } from 'react-icons/fa'
// const Foods = ({ curElem }) => {
//   return (
//     <div>
//         <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
//                 <div className="relative mb-3">
//                   <Link to ={`/menu/${curElem?._id}`}>
//                     <img src={curElem?.foodImage} alt="hi"  />
//                     </Link>
//                     <div className="absolute top-2 left-2">
//                         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
//                             <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

//                         </button>

//                     </div>
//                     <div className="absolute bottom-2 right-2">
//                         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//                             <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">₹{ curElem?.price}</div>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                 <p className="text-xl text-center font-bold text-[#f54748]">
//                   {curElem?.name}
//                 </p>
//                 <div className="flex text-sm space-x-2 cursor-pointer">
//                     <span className="font-normal text-[#fdc55e]">4.3</span>
//                     <FaStar size={16} className='text-[#fdc55e]'/>
//                     <span className="font-medium">({curElem?.reviews?.length})</span>
//                 </div>
//             </div>
//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">order now</button>

//             </div>
           
//     </div>
//   )
// }

// export default Foods


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaStar } from 'react-icons/fa';

const Foods = ({ curElem }) => {
  const [liked, setLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
        <div className="relative mb-3">
          <Link to={`/menu/${curElem?._id}`}>
            <img src={curElem?.foodImage} alt="Food" />
          </Link>
          <div className="absolute top-2 left-2">
            <button
              className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative"
              onClick={() => {
                toggleLike();
                togglePopup();
              }}
            >
              <FaHeart
                className={`absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${liked ? 'text-white-500' : 'text-white-500'}`}
              />
            </button>
          </div>
          <div className="absolute bottom-2 right-2">
            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
              <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ₹{curElem?.price}
              </div>
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-xl text-center font-bold text-[#f54748]">
            {curElem?.name}
          </p>
          <div className="flex text-sm space-x-2 cursor-pointer">
            <span className="font-normal text-[#fdc55e]">4.3</span>
            <FaStar size={16} className="text-[#fdc55e]" />
            <span className="font-medium">({curElem?.reviews?.length})</span>
          </div>
        </div>
        {/* <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 tet-xl font-medium text-white">
          Order Now
        </button> */}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <p>You clicked the heart icon!</p>
            {/* <p>{username ? `${user?.name} clicked the heart icon!` : 'Loading...'}</p> */}
            <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Foods;
