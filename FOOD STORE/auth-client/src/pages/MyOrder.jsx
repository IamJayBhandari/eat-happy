// //real
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useCartContext } from '../../context/cardContext'
// import { useUserContext } from '../../context/userContext'
// import axios from 'axios';


// const MyOrder = () => {
//     const { cartItems,removeItems,addToCart } = useCartContext()
//     const{user,setUser}=useUserContext()
//     const [order,setOrders]=useState([])

//     const getMyOrders = async () => {
//        try {
    
//             const res = await axios.post(`http://localhost:8000/api/v1/order/getorder`, {
//                 userId: user?.user._id,
//                token:localStorage.getItem("token")
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             });
    
//             if (res.data.success) {
                
//                 setOrders(res.data.data)
              
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("something went wrong");
//         }
//     };
//     useEffect(()=>{
//         getMyOrders()
//     },[])
//     console.log(order)
//   return (
//     <div className=''>
//     <div className="pt-14">
   
//         <div className="container mx-auto py-6">
//             <div className="w-full bg-white px-10 py-5 text-black rounded-md">
//             <div className="flex justify-between border-b pb-8">
//                 <h1 className="font-semibold text-2xl">
//                     My food cart
//                 </h1>
               

//             </div>
//             <div className="mt-10 flex mb-5">
//                 <h3 className='font-semibold text-gray-900 text-xs uppercase w-2/5'>
//                     Food Details
//                 </h3>
//                 <h3 className='font-semibold text-gray-900 text-xs uppercase w-2/5'>
//                     Category
//                 </h3>
//                 <h3 className='font-semibold text-gray-900 text-xs uppercase w-2/5'>
//                     Price
//                 </h3>
//                 <h3 className='font-semibold text-gray-900 text-xs uppercase w-2/5'>
//                     Total Price
//                 </h3>

//             </div>
//             {
//                 order?.map((food)=>{
//                     return (
//                             <CartFood food={food}/>
//                     )
//                 })
//             }

//             {/* <div className={
//                     cartItems.length===0?"mx-auto hidden  items-end justify-center px-6 flex-col":"mx-auto justify-end items-end px-6 flex-col"
//             }>
// {/* 
//                 <div className="text-right mb-2 font-semibold text-red-900">
//                     Shipping : {shippingPrice}
//                 </div>
//                 <div className="text-right mb-2 font-semibold text-red-900">
//                     Total Price : {totalPrice}
//                 </div> */}
//                 <Link to='/order'>
//                 <button className="btn text-right ml-auto justify-end text-white hover:bg-red-600 hover:border-red-600 btn-sm bg-red-500">
//                     Check Out
//                 </button>
//                 </Link>
//             {/* </div>  */}
//             </div>
//         </div>
   
//    </div>
//    </div>
//   )
// }

// export default MyOrder

// const CartFood=({food}) => {
//     const { cartItems,removeItems,addToCart } = useCartContext()
//     return(
//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//             <div className="flex w-2/5 ">
//                 <div className="grid grid-cols-3">
//                     {
//                         food?.items?.map((items)=><>
//                         <div className="flex flex-col justify-between ml-4 flex-grow">
//                             <div>
//                                 <img src={items?.food.foodImage} alt="" className="h-20" />
//                             </div>
//                             <span className="font-bold text-sm">
//                                 {items?.food?.name}
//                             </span>
//                             <span className="flex items-center space-x-4">
//                             qty: <span className="text-red-500 px-3 py-2 bg-slate-50 text-lg font-medium">{items?.qty}</span>
//                             </span>
//                         </div>
//                         </>)
//                     }
//                     <img src={food?.foodImage} alt="" className="h-20" />
//                 </div>
//                 <div className="flex flex-col justify-between ml-4 flex-grow">
//                     <span className="font-bold text-sm">
//                     {food.name}
//                     </span>
//                     <span className="flex items-center space-x-4">
                    
//                     {/* <div className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-4 rounded-full relative" onClick={()=>removeItems(food)}>
//                     <AiOutlineMinus size={20} className='absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
//                     </div>
//                     <span className="text-red-500 px-3 py-2 bg-slate-100 text-lg font-medium">
//                     {food.qty}
//                     </span>
//                     <div className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-4 rounded-full relative" onClick={()=>addToCart(food)}>
//                     <AiOutlinePlus size={20} className='absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
//                     </div> */}

//                     </span>
//                 </div>
//                 </div>

//                 <div className="flex justify-center w-1/5 cursor-pointer">
//               {
//                 food?.payment===false && <span claaname="font-bold text-sm">Not paid</span>
//               }
//                 {
//                 food?.payment && <span claaname="font-bold text-green-600 text-sm">paid</span>
//               }
//                 </div>
//                 <div className="flex justify-center w-1/5 cursor-pointer">
//               <span claaname="font-bold text-green-600 text-sm">{food?.status}</span>
              
//                 </div>
//                 <span className="font-bold text-center w-1/5 text-sm">
                    
//                         {food.createdAt}
                    
//                 </span>
//                 <span className="font-bold text-center w-1/5 text-sm">
                    
//                     { food?.totalAmount}
                
//             </span>
                

//             </div>

       
//     )
// }

//chatgpt

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//     const [order, setOrder] = useState(null);
//     const [orderId, setOrderId] = useState(''); // State to store the orderId

//     useEffect(() => {
//         if (orderId) {
//             getMyOrder(orderId);
//         }
//     }, [orderId]);

//     const getMyOrder = async (orderId) => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.get(`http://localhost:8000/api/v1/order/orders/${orderId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             setOrder(response.data.data);
//         } catch (error) {
//             console.error('Error fetching order:', error);
//         }
//     };

//     const handleChange = (e) => {
//         setOrderId(e.target.value);
//     };

//     return (
//         <div style={{ marginTop: '499px', marginBottom: "499px" }}>
//             <h1>My Order Details</h1>
//             <div>
//                 <label htmlFor="orderId">Order ID:</label>
//                 <input type="text" id="orderId" value={orderId} onChange={handleChange} />
//                 <button onClick={() => setOrderId(orderId)}>Fetch Order</button>
//             </div>
//             {order ? (
//                 <div>
//                     <h3>Order ID: {order._id}</h3>
//                     <p>Total Amount: {order.totalAmount}</p>
//                     <p>Status: {order.status}</p>
//                     <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
//                 </div>
//             ) : (
//                 <p>No order details to display</p>
//             )}
//         </div>
//     );
// };

// export default MyOrder;

//new

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//     const [orders, setOrders] = useState([]);
//     const userId = '66001acf4ab48b7def7f0ca4'; // Assuming user ID obtained from authentication

//     useEffect(() => {
//         getMyOrders();
//     }, []);

//     const getMyOrders = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.get(`http://localhost:8000/api/v1/order/orders/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             setOrders(response.data.data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     return (
//         <div style={{ marginTop: '499px' }}>
//             <h1>My Orders</h1>
//             <div>
//                 {orders.length > 0 ? (
//                     orders.map(order => (
//                         <div key={order._id}>
//                             <h3>Order ID: {order._id}</h3>
//                             <p>Total Amount: {order.totalAmount}</p>
//                             <p>Status: {order.status}</p>
//                             <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No orders found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyOrder;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//     const [order, setOrder] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchOrderForCurrentUser();
//     }, []);

//     const fetchOrderForCurrentUser = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.get(`http://localhost:8000/api/v1/order/orders`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             const userId = getUserId();
//             const currentUserOrder = response.data.data.find(order => order.user === userId);

//             if (currentUserOrder) {
//                 setOrder(currentUserOrder);
//                 setError(null); // Clear any previous errors
//             } else {
//                 setOrder(null);
//                 setError('No orders found for the current user.');
//             }
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//             setError('Failed to fetch orders. Please try again later.');
//         }
//     };

//     const getUserId = () => {
//         // Replace with logic to retrieve user ID
//         return '66001acf4ab48b7def7f0ca4'; // Example user ID
//     };

//     return (
//         <div style={{ marginTop: '499px' }}>
//             <h1>My Orders</h1>
//             {error ? (
//                 <p>Error: {error}</p>
//             ) : order ? (
//                 <div>
//                     <h3>Order ID: {order._id}</h3>
//                     <p>Total Amount: {order.totalAmount}</p>
//                     <p>Status: {order.status}</p>
//                     <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
//                 </div>
//             ) : (
//                 <p>No orders to display</p>
//             )}
//         </div>
//     );
// };

// export default MyOrder;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const userId = "user_id_here"; // You need to get the userId from your authentication mechanism
//             const response = await axios.get(`http://localhost:8000/api/v1/order/orders/user/${userId}`);
//             console.log('Response:', response.data);
//             setOrders(response.data.data);
//             setLoading(false);
//             setError(null);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//             setLoading(false);
//             setError('Failed to fetch orders. Please try again later.');
//         }
//     };

//     const handleCancelOrder = async (orderId) => {
//         try {
//             const response = await axios.delete(`http://localhost:8000/api/v1/order/orders/${orderId}/cancel`);
//             console.log('Order cancelled successfully:', response.data);
//             // After successful cancellation, you might want to update the UI accordingly
//         } catch (error) {
//             console.error('Error cancelling order:', error);
//             // Handle error if cancellation fails
//         }
//     };

//     return (
//         <div className="container mx-auto px-4 py-8 mt-10">
//             <h1 className="text-3xl font-bold mb-4">My Orders</h1>
//             {loading && <p>Loading...</p>}
//             {error && <p className="text-red-500">{error}</p>}
//             {!loading && !error && (
//                 <ul>
//                     {orders.map(order => (
//                         <li key={order._id} className="border border-gray-200 rounded-md p-4 mb-4">
//                             <p className="font-bold">Order ID: {order._id}</p>
//                             <p>Total Amount: {order.totalAmount}</p>
//                             <p>Status: {order.status}</p>
//                             <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
//                             <button
//                                 className="bg-red-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-red-600 transition duration-300"
//                                 onClick={() => handleCancelOrder(order._id)}
//                             >
//                                 Cancel Order
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MyOrder;
// MyOrder.jsx

// MyOrder.jsx

// MyOrder.jsx

// MyOrder.jsx


// MyOrder.jsx
// MyOrder.jsx

// const MyOrder = () => {
//   const [userId, setUserId] = useState(null);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUserObject = async () => {
//       try {
//         const response = await axios.get('api/v1/user');
//         setUserId(response.data._id); // Assuming the user ID is stored in the _id field of the user object
//         console.log('User ID:', response.data._id); // Log the user ID
//       } catch (error) {
//         console.error('Error fetching user object:', error);
//       }
//     };

//     fetchUserObject();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       const fetchUserOrders = async () => {
//         try {
//           const url = `http://localhost:8000/api/v1/order/orders/user/${userId}`;
//           console.log('Fetching orders from:', url); // Log the URL
//           const response = await axios.get(url);
//           console.log('Orders:', response.data); // Log the orders
//           setOrders(response.data);
//         } catch (error) {
//           console.error('Error fetching user orders:', error);
//         }
//       };

//       fetchUserOrders();
//     }
//   }, [userId]);

//   return (
//     <div style={{ marginTop: '499px' }}>
//       <h1>My Orders</h1>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order._id}>
//             <p>Order ID: {order._id}</p>
//             <p>Total Price: ${order.totalAmount}</p>
//           </div>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default MyOrder;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUserContext } from '../../context/userContext'; // Import useUserContext

// const MyOrder = () => {
//   const { user } = useUserContext(); // Access user from context
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (user && user._id) {
//       const fetchUserOrders = async () => {
//         try {
//           const url = `http://localhost:8000/api/v1/order/orders/user/${user._id}`; // Use user._id from context
//           console.log('Fetching orders from:', url); // Log the URL
//           const response = await axios.get(url);
//           console.log('Orders:', response.data); // Log the orders
//           setOrders(response.data);
//         } catch (error) {
//           console.error('Error fetching user orders:', error);
//         }
//       };

//       fetchUserOrders();
//     }
//   }, [user]);

//   return (
//     <div style={{ marginTop: '499px' }}>
//       <h1>My Orders</h1>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order._id}>
//             <p>Order ID: {order._id}</p>
//             <p>Total Price: ${order.totalAmount}</p>
//           </div>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default MyOrder;
//real
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const url = `http://localhost:8000/api/v1/order/orders/user/66001acf4ab48b7def7f0ca4`; // Hardcoded user ID
        console.log('Fetching orders from:', url); // Log the URL
        const response = await axios.get(url);
        console.log('Orders:', response.data); // Log the orders
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching user orders:', error);
      }
    };

    fetchUserOrders();
  }, []);

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

  return (
    <div className="mt-32 mx-auto max-w-screen-lg">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order._id} className="border p-4 mb-4">
            <p className="mb-2">Order ID: {order._id}</p>
            {order.user && (
              <p className="text-gray-800">User: {order.user.name}</p>
            )}
            <p className="text-gray-800">Food Items:</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.food?._id}>
                  {item.food ? `${item.food.name} - Qty: ${item.qty}` : 'Unknown Food'}
                </li>
              ))}
            </ul>
            
            <p className="mb-2">Total Price: ${order.totalAmount}</p>
            <p className="text-gray-800">Status: {order.status}</p>
            <p className="text-gray-800">Adress: {order.address}</p>
            <p className="text-gray-800">Created At: {new Date(order.createdAt).toLocaleString()}</p>
            <button onClick={() => cancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Cancel Order</button>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrder;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUserOrders = async () => {
//       try {
//         const userId = localStorage.getItem('userId'); // Fetch the user ID from local storage
//         const url = `http://localhost:8000/api/v1/order/orders/user/${userId}`; // Use the user ID in the URL
//         console.log('Fetching orders from:', url); // Log the URL
//         const response = await axios.get(url);
//         console.log('Orders:', response.data); // Log the orders
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error fetching user orders:', error);
//       }
//     };

//     fetchUserOrders();
//   }, []);

//   const cancelOrder = async (orderId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`http://localhost:8000/api/v1/order/orders/${orderId}/cancel`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         // If cancellation is successful, you might want to update the UI to reflect the change
//         // Here, we can assume that the canceled order is removed from the list, so we refresh the orders
//         fetchUserOrders(); // Refresh the orders
//     } catch (error) {
//         console.error('Error canceling order:', error);
//     }
// };

//   return (
//     <div className="mt-32 mx-auto max-w-screen-lg">
//       <h1 className="text-4xl font-bold mb-8">My Orders</h1>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order._id} className="border p-4 mb-4">
//             <p className="mb-2">Order ID: {order._id}</p>
//             {order.user && (
//               <p className="text-gray-800">User: {order.user.name}</p>
//             )}
//             <p className="text-gray-800">Food Items:</p>
//             <ul>
//               {order.items.map((item) => (
//                 <li key={item.food?._id}>
//                   {item.food ? `${item.food.name} - Qty: ${item.qty}` : 'Unknown Food'}
//                 </li>
//               ))}
//             </ul>
            
//             <p className="mb-2">Total Price: ${order.totalAmount}</p>
//             <p className="text-gray-800">Status: {order.status}</p>
//             <p className="text-gray-800">Adress: {order.address}</p>
//             <p className="text-gray-800">Created At: {new Date(order.createdAt).toLocaleString()}</p>
//             <button onClick={() => cancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Cancel Order</button>
//           </div>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default MyOrder;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [userName, setUserName] = useState(""); // Add state to hold user name

//   useEffect(() => {
//     const fetchUserOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`http://localhost:8000/api/v1/auth/me`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setUserName(response.data.name); // Set user name from response
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserOrders();
//   }, []);

//   useEffect(() => {
//     if (userName) { // Fetch orders only when user name is available
//       const fetchOrders = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/api/v1/order/orders/user/${userName}`);
//           setOrders(response.data);
//         } catch (error) {
//           console.error('Error fetching user orders:', error);
//         }
//       };
//       fetchOrders();
//     }
//   }, [userName]); // Fetch orders when user name changes

//   const cancelOrder = async (orderId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:8000/api/v1/order/orders/${orderId}/cancel`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       // If cancellation is successful, you might want to update the UI to reflect the change
//       // Here, we can assume that the canceled order is removed from the list, so we refresh the orders
//       const response = await axios.get(`http://localhost:8000/api/v1/order/orders/user/${userName}`);
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error canceling order:', error);
//     }
//   };

//   return (
//     <div className="mt-32 mx-auto max-w-screen-lg">
//       <h1 className="text-4xl font-bold mb-8">My Orders</h1>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order._id} className="border p-4 mb-4">
//             <p className="mb-2">Order ID: {order._id}</p>
//             <p className="text-gray-800">Food Items:</p>
//             <ul>
//               {order.items.map((item) => (
//                 <li key={item.food?._id}>
//                   {item.food ? `${item.food.name} - Qty: ${item.qty}` : 'Unknown Food'}
//                 </li>
//               ))}
//             </ul>
//             <p className="mb-2">Total Price: ${order.totalAmount}</p>
//             <p className="text-gray-800">Status: {order.status}</p>
//             <p className="text-gray-800">Created At: {new Date(order.createdAt).toLocaleString()}</p>
//             <button onClick={() => cancelOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Cancel Order</button>
//           </div>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default MyOrder;
