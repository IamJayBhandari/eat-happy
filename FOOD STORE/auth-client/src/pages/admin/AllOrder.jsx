// import  axios  from "axios";
// import { useUserContext } from "../../../context/userContext";
// import {toast,ToastContainer} from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from "react";


// const AllOrder = () => {
//     const [order,getOrders] = useState([])
//     const {user,setUser}=useUserContext()
//     const getAllOrders = async () => {
//         try {
//             const res = await axios.post('http://localhost:8000/api/vl/order/getorders',{
//                 userId: user?user._id,
//                 token: localStorage.getItem("token")
//         },{
//             headers: {
//                 Authorization: `Bearer ${loacalStorage.getItem("token")}`
//             }
//         })
//         if(res.data.success){
//             getOrders(res.data.data)
//         }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getAllOrders()
//     },[order])
    
//     return (
//         <div className="pt-14">
//             <div 
//                 className={
//                     order?.length === 0 ? "bg-gray-100 h-96" : "bg-gray-100"
//                 }
//                 >
//                   <div className="container mx-auto py-6" >
//                         <div className="w-full bg-white px-10 py-5 text-black rounded-md">
//                             <div className="flex justify-beteen border-b pb-8">
//                                 <h1 className="font-semibold text-2xl">My Orders</h1>
//                             </div>
//                             <div className="flex mt-10 mb-5">
//                                 <h3 className="font-semibold text-gray-900 text-x5 uppercase w-2/5">
//                                     Food Details
//                                 </h3>
//                                 <h3 className="font-semibold text-center text-center text-gray-900 text-x5 uppercase w-1/5">
//                                     Payment
//                                 </h3>
//                                 <h3 className="font-semibold text-center text-center text-gray-900 text-x5 uppercase w-1/5">
//                                     Total Price
//                                 </h3>
//                                 <h3 className="font-semibold text-center text-center text-gray-900 text-x5 uppercase w-1/5">
//                                 Toatal Price
//                                 </h3>
//                                 <h3 className="font-semibold text-center text-center text-gray-900 text-x5 uppercase w-1/5">
//                                 Date
//                                 </h3>
//                                 <h3 className="font-semibold text-center text-center text-gray-900 text-x5 uppercase w-1/5">
//                                 Total Price
//                                 </h3>

//                             </div>
//                             {order?.map((order)=> {
//                                 return (
//                                     <OrderFoods 
//                                      key={order.id}
//                                      order={order}
//                                      />
//                                 )
//                             })}
//                         </div>
                    
//                 </div>
//         </div>
//     )

// }


// //real
// import axios from "axios";
// import { useUserContext } from "../../../context/userContext";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from "react";
// import OrderFoods from './OrderFoods'; // Assuming OrderFoods component is imported

// const AllOrder = () => {
//     const [order, setOrders] = useState([]);
//     const { user, setUser } = useUserContext();

//     const getAllOrders = async () => {
//         try {
//             const res = await axios.post('http://localhost:8000/api/v1/order/getorders', {
//                 userId: user ? user._id : "",
//                 token: localStorage.getItem("token")
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             });
//             if (res.data.success) {
//                 setOrders(res.data.data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getAllOrders();
//     }, []);

//     return (
//         <div className="pt-14">
//             <div className={order.length === 0 ? "bg-gray-100 h-96" : "bg-gray-100"}>
//                 <div className="container mx-auto py-6">
//                     <div className="w-full bg-white px-10 py-5 text-black rounded-md">
//                         <div className="flex justify-between border-b pb-8">
//                             <h1 className="font-semibold text-2xl">My Orders</h1>
//                         </div>
//                         <div className="flex mt-10 mb-5">
//                             <h3 className="font-semibold text-gray-900 text-xl uppercase w-2/6">
//                                 Food Details
//                             </h3>
//                             <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">
//                                 Payment
//                             </h3>
//                             <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">
//                                 Total Price
//                             </h3>
//                             <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">
//                                 Date
//                             </h3>
//                             <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">
//                                 Status
//                             </h3>
//                         </div>
//                         {order.map((order) => (
//                             <OrderFoods key={order.id} order={order} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllOrder;

// const OrderFoods = {{ order }) => {
//     const { user, setUser } = useUserContext();
//     const handleDelivered = async (id) => {
//         console.log(id)
//         try {
//             const res = await axios.post('http://localhost:8000/api/v1/order/status', {
//                 userId: user ? user._id,
//                 orderId: id,
//                 token: localStorage.getItem("token")
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             });
//             console.log(res.data)
//             if(res.data.success) {
//                 toast.success(res.data.message)
//             } else {
//                 toast.error(res.data.message)
//             }
        
//         } catch(error) {
//             console.log(error)
//         }

//     }
//     return {
//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//           <div className="flex w-2/5">
//           <div className="grid grid-cols-3">
//           {
//             order?.items?.map((item) => <div className="flex flex-col justify-between ml-4 flex-grow">
//                 <div>
//                     <img className="h-20" src={item?.food.foodImage} alt="" />
//                 </div>
//                 <span className="font-bold text-sm">{item?.food?.name</span>
//                  <span className="flex items-center space-x-4">
//                     qty:
//                  </span>
//                  <span className="text-red-500 px-3 py-2 bg-slate-50 text-lg font-medium">
//                  {item?.qty}
//               </span>
//               </span>

//           }
//           </div>
//           </div>
//     }
// }


// }}
// real

// import axios from "axios";
// import { useUserContext } from "../../../context/userContext";
// import { toast } from "react-toastify";

// const OrderFoods = ({ order }) => {
//     const { user } = useUserContext();

//     const handleDelivered = async (id) => {
//         try {
//             const res = await axios.post('http://localhost:8000/api/v1/order/deliverd', {
//                 userId: user ? user._id : "",
//                 orderId: id,
//                 token: localStorage.getItem("token")
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
//         }
//     };

//     return (
//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//             <div className="flex w-2/5">
//                 <div className="grid grid-cols-3">
//                     {order?.items?.map((item, index) => (
//                         <div key={index} className="flex flex-col justify-between ml-4 flex-grow">
//                             <div>
//                                 <img className="h-20" src={item?.food.foodImage} alt="" />
//                             </div>
//                             <span className="font-bold text-sm">{item?.food?.name}</span>
//                             <span className="flex items-center space-x-4">
//                                 Qty: <span className="text-red-500 px-3 py-2 bg-slate-50 text-lg font-medium">{item?.qty}</span>
//                             </span>
//                         </div>
//                     ))
//                     }

//                 </div>
//             </div>
//             <div className="flex justify-center w-1/5 cursor-pointer">
//                 {order?.payment === false && <span className="font-bold text-sm">Not Paid</span>}
//                 {order?.payment === false && <span className="font-bold text-sm">Paid</span>}

//             </div>
//             <div className="flex justify-center w-1/5 cursor-pointer">
//             <span className="font-bold text-sm">{order?.status}</span>
//             </div>
//             <div className="flex justify-center w-1/5 cursor-pointer">
//             <button className="bg-[#f54748] active:scale-90 transistion duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center" onClick={()=> handleDelivered(order?.id)}>Deliverd</button>

//         </div>
//         <span className="text-center w-1/5 font-semibold text-sm">
//             {order?.createdAt}
//         </span>
//         <span className="text-center w-1/5 font-semibold text-sm">
//             {order?.totalAmount}
//         </span>
//         <ToastContainer/>
//         </div>
//     );
// };

// export  {OrderFoods};


// //chatgpt

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllOrdersPage = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     getAllOrders();
//   }, []);

//   const getAllOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/v1/order/orders');
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleDelivered = (orderId) => {
//     // Handle delivery logic here
//   };

//   return (
//     <div className="pt-14">
//       <div className={orders.length === 0 ? "bg-gray-100 h-96" : "bg-gray-100"}>
//         <div className="container mx-auto py-6">
//           <div className="w-full bg-white px-10 py-5 text-black rounded-md">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">My Orders</h1>
//             </div>
//             <div className="flex mt-10 mb-5">
//               <h3 className="font-semibold text-gray-900 text-xl uppercase w-2/6">Food Details</h3>
//               <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">Payment</h3>
//               <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">Total Price</h3>
//               <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">Date</h3>
//               <h3 className="font-semibold text-center text-gray-900 text-xl uppercase w-1/6">Status</h3>
//             </div>
//             {orders.map((order) => (
//               <OrderFoods key={order._id} order={order} handleDelivered={handleDelivered} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const OrderFoods = ({ order, handleDelivered }) => {
//   return (
//     <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//       <div className="flex w-2/6">
//         <div className="grid grid-cols-3">
//           {order?.items?.map((item, index) => (
//             <div key={index} className="flex flex-col justify-between ml-4 flex-grow">
//               <div>
//                 <img className="h-20" src={item?.food.foodImage} alt="" />
//               </div>
//               <span className="font-bold text-sm">{item?.food?.name}</span>
//               <span className="flex items-center space-x-4">
//                 Qty: <span className="text-red-500 px-3 py-2 bg-slate-50 text-lg font-medium">{item?.qty}</span>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center w-1/6 cursor-pointer">
//         {order?.payment ? <span className="font-bold text-sm">Paid</span> : <span className="font-bold text-sm">Not Paid</span>}
//       </div>
//       <div className="flex justify-center w-1/6 cursor-pointer">
//         <span className="font-bold text-sm">{order?.totalAmount}</span>
//       </div>
//       <div className="flex justify-center w-1/6 cursor-pointer">
//         <span className="font-bold text-sm">{order?.createdAt}</span>
//       </div>
//       <div className="flex justify-center w-1/6 cursor-pointer">
//         <button className="bg-[#f54748] active:scale-90 transistion duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center" onClick={() => handleDelivered(order?._id)}>Delivered</button>
//       </div>
//     </div>
//   );
// };

// export default AllOrdersPage;



// //new
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getAllOrders();
//   }, []);

//   const getAllOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/v1/order/orders');
//       setOrders(response.data);
//       setLoading(false); // Set loading to false once data is fetched
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setOrders([]); // Set orders to an empty array to prevent further errors
//       setLoading(false); // Set loading to false in case of error
//     }
//   };

//   const cancelOrder = async (orderId) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/v1/order/orders/${orderId}`);
//       // Remove the cancelled order from the state
//       setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
//     } catch (error) {
//       console.error('Error cancelling order:', error);
//     }
//   };

//   return (
//     <div style={{ marginTop: '499px' ,marginbottom: "499px"}}>
//       <h1>All Orders</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>User ID</th>
//               <th>Total Amount</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//   {Array.isArray(orders) && orders.map(order => (
//     <tr key={orders._id}>
//       <td>{orders._id}</td>
//       <td>{orders.user}</td> {/* Assuming user object has an _id field */}
//       <td>${orders.totalAmount.toFixed(2)}</td>
//       <td>{orders.status}</td>
//       <td>
//         <button onClick={() => cancelOrder(orders._id)}>Cancel</button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//         </table>
//       )}
//     </div>
//   );
// };

// export default AllOrder;


//next

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cancelOrder from './cancel';
import markAsDelivered from './markAsDelivered';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getMyOrders();
    }, []);

    const getMyOrders = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/api/v1/order/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setOrders(response.data.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const cancelOrder = async (orderId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8000/api/v1/order/orders/${orderId}/cancel`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // If cancellation is successful, you might want to update the UI to reflect the change
            // Here, we can assume that the canceled order is removed from the list, so we refresh the orders
            getMyOrders(); // Assuming getMyOrders function is defined elsewhere
        } catch (error) {
            console.error('Error canceling order:', error);
        }
    };
    
    
    const markAsDelivered = async (orderId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:8000/api/v1/order/orders/${orderId}/delivered`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // If marking as delivered is successful, you might want to update the UI to reflect the change
            // Here, we can assume that the order status is updated, so we refresh the orders
            getMyOrders();
        } catch (error) {
            console.error('Error marking order as delivered:', error);
        }
    };


    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold mb-4">My Orders</h1>
            <div>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div key={order._id} className={`border border-gray-300 p-4 mb-4 rounded-lg ${index === 0 ? 'mt-8' : ''}`}>
                            <h3 className="text-xl font-semibold mb-2">Order ID: {order._id}</h3>
                            <p className="text-gray-800">User: {order.user.name}</p> 
                             <p className="text-gray-800">Food Items:</p>
                            <ul>
    {order.items.map((item) => (
        <li key={item.food?._id}>
            {item.food ? `${item.food.name} - Qty: ${item.qty}` : 'Unknown Food'}
        </li> 
    ))}
</ul> 

                            <p className="text-gray-800">Total Amount: {order.totalAmount}</p>
                            <p className="text-gray-800">Status: {order.status}</p>
                            <p className="text-gray-800">Adress: {order.address}</p>
                            <p className="text-gray-800">Created At: {new Date(order.createdAt).toLocaleString()}</p>
                            <div className="mt-4">
                                <button onClick={() => cancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Cancel Order</button>
                                <button onClick={() => markAsDelivered(order._id)} className="bg-green-500 text-white px-4 py-2 rounded-md">Mark as Delivered</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default MyOrder;
