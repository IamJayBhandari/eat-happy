
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../context/userContext';
import { useCartContext } from '../../context/cardContext';
import axios from 'axios';

const Order = () => {
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const { cartItems } = useCartContext();
    const { user } = useUserContext();

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const handleFinish = async () => {
        if (cardNumber.length < 12) {
            window.location.href = '/cancel';
            return;
        }

        try {
            const orderItems = cartItems.map(item => ({
                food: item._id,
                qty: item.qty
            }));

            const res = await axios.post(`http://localhost:8000/api/v1/order/order`, {
                userId: user?.user._id,
                items: orderItems,
                totalAmount: totalPrice,
                address: address, // Include address in the request
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (res.data.success) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="h-screen pt-[16vh]">
            <div className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5'>
                <NavLink to="/">
                    <img src={logo} alt="" className="logo h-24 w-24 cursor-pointer mb-6 cursor-pointer text-center" />
                </NavLink>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Items Price : <span className="text-[#f54748">₹{itemsPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Tax Price : <span className="text-[#f54748">₹{taxPrice.toFixed(2)}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Shipping Price : <span className="text-[#f54748">₹{shippingPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Total Price : <span className="text-[#f54748">₹{totalPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Address: <input type="text" className="text-[#f54748] "value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Card Number: <input type="text" className="text-[#f54748]" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    CVV <input type="text" className="text-[#f54748]"  />
                </div>
                <Link to='/success'>
                    <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center type='submit'" onClick={handleFinish}>Pay ₹{totalPrice}</button>
                </Link>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Order;

// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import logo from "../assets/Logo.svg";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useUserContext } from '../../context/userContext';
// import { useCartContext } from '../../context/cardContext';
// import axios from 'axios';

// const Order = () => {
//     const [cardNumber, setCardNumber] = useState('');
//     const [address, setAddress] = useState('');
//     const { cartItems } = useCartContext();
//     const { user } = useUserContext();

//     const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//     const taxPrice = itemsPrice * 0.14;
//     const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//     const totalPrice = itemsPrice + shippingPrice + taxPrice;

//     const handleFinish = async () => {
//         if (cardNumber.length < 12) {
//             window.location.href = '/cancel';
//             return;
//         }

//         try {
//             const orderItems = cartItems.map(item => ({
//                 food: item._id,
//                 qty: item.qty
//             }));

//             const res = await axios.post(`http://localhost:8000/api/v1/order/order`, {
//                 userId: user?.user._id,
//                 items: orderItems,
//                 totalAmount: totalPrice,
//                 address: address,
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             });

//             if (res.data.success) {
//                 toast.success(res.data.message);
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <div className="h-screen pt-[16vh]">
//             <div className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5'>
//                 <NavLink to="/">
//                     <img src={logo} alt="" className="logo h-24 w-24 cursor-pointer mb-6 cursor-pointer text-center" />
//                 </NavLink>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Items Price : <span className="text-[#f54748">₹{itemsPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Tax Price : <span className="text-[#f54748">₹{taxPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Shipping Price : <span className="text-[#f54748">₹{shippingPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Total Price : <span className="text-[#f54748">₹{totalPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Address: <input type="text" id="address" className="text-[#f54748]" value={address} onChange={(e) => setAddress(e.target.value)} />
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Card Number: <input type="text" className="text-[#f54748]" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     CVV <input type="text" className="text-[#f54748]"  />
//                 </div>
//                 <Link to='/success'>
//                     <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center type='submit'" onClick={handleFinish}>Pay ₹{totalPrice}</button>
//                 </Link>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default Order;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from "../assets/Logo.svg";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useUserContext } from '../../context/userContext';
// import { useCartContext } from '../../context/cardContext';
// import axios from 'axios';

// const Order = () => {
//     const { cartItems } = useCartContext();
//     const { user } = useUserContext();

//     const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//     const taxPrice = itemsPrice * 0.14;
//     const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//     const totalPrice = itemsPrice + shippingPrice + taxPrice;

//     const handleFinish = async () => {
//         try {
//             const orderItems = cartItems.map(item => ({
//                 food: item._id,
//                 qty: item.qty
//             }));

//             const res = await axios.post(`http://localhost:8000/api/v1/order/order`, {
//                 userId: user?.user._id,
//                 items: orderItems,
//                 totalAmount: totalPrice,
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             });

//             if (res.data.success) {
//                 // Handle successful order creation
//                 toast.success(res.data.message);
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <div className="h-screen pt-[16vh]">
//             <div className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5'>
//                 <NavLink to="/">
//                     <img src={logo} alt="" className="logo h-24 w-24 cursor-pointer mb-6 cursor-pointer text-center" />
//                 </NavLink>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Items Price : <span className="text-[#f54748">₹{itemsPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Tax Price : <span className="text-[#f54748">₹{taxPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Shipping Price : <span className="text-[#f54748">₹{shippingPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Total Price : <span className="text-[#f54748">₹{totalPrice}</span>
//                 </div>
//                 <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center type='submit'" onClick={handleFinish}>Pay ₹{totalPrice}</button>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default Order;
