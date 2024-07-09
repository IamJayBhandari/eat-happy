//real
// import { useState } from 'react'
// import './App.css'
// import { Navbar } from './Shared/Navbar'
// import  Home  from './pages/Home'
// import Footer from './Shared/Footer'
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import ProtectedRoute from './pages/ProtectedRoute'
// import Addfood from './pages/admin/Addfood'
//  import VerifyOtp from './pages/VerifyOtp'
// import Menu from './pages/Menu'
// import FoodPage from './pages/FoodPage'
// import Profile from './pages/Profile'
// import ViewCart from './pages/ViewCart'
// import Service from './component/Service';
// import { Router } from 'react-router-dom'
// import Success from './pages/Success'
// import Cancel from './pages/Cancel'
// import Order from './pages/Order'
// import { useUserContext } from '../context/userContext'
// import MyOrder from './pages/MyOrder'
// import NewOrderPage from './pages/NewOrderPage'
// import TodaySpecial from './pages/todayspecial'
// import WhyEatHappy from './pages/whyeathappy'
// import AllOrder from './pages/admin/AllOrder'

// //  const {user}=useUserContext()
// //  const stripe=useStripe()

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//     console.log(procees.env.JWT_SECRET)
//      <Navbar />
//      <Routes>
//        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
//        {/* <Route path='/' element={<Home />} /> */}
//        <Route path='/login' element={<Login />} />
//        <Route path='/todayspecial'  element={< TodaySpecial />} />
//        <Route path="/whyeathappy" element={<WhyEatHappy />} />
//        <Route path='/register' element={<Register />} />
      
//        {/* <Route path='/addfood' element={ < Addfood />} /> */}
//        {/* <Route path='/menu' element={< Menu />} /> */}
//        {/* <Route path='/menu/:id' element={< FoodPage />} /> */}

     

//        <Route path='/verifyOtp' element={
//         <ProtectedRoute>
//        <VerifyOtp/>
//        </ProtectedRoute>
//        } />

//         <Route path='/addfood' element={
//         <ProtectedRoute>
//         <Addfood/>
//          </ProtectedRoute>
//         } />
//          {/* <Route path='/about' element={
//         <ProtectedRoute>
//         <AboutPage/>
//          </ProtectedRoute>
//           } /> */}

//         <Route path='/menu' element={
//         <ProtectedRoute>
//         <Menu/>
//          </ProtectedRoute>
//         } />
//           <Route path='/profile' element={
//         <ProtectedRoute>
//         <Profile/>
//          </ProtectedRoute>
//         } />
        
//          <Route path='/menu/:id' element={
//         <ProtectedRoute>
//         <FoodPage/>
//          </ProtectedRoute>
//         } />
        
//         <Route path='/viewcart' element={
//         <ProtectedRoute>
//         <ViewCart/>
//          </ProtectedRoute>
//         } />
       
//         <Route path='/success' element={
//         <ProtectedRoute>
//         <Success/>
//         </ProtectedRoute>
//         } />

//         <Route path='/cancel' element={
//         <ProtectedRoute>
//         <Cancel/>
//         </ProtectedRoute>
//         } />
//         <Route path="/new-order" component={NewOrderPage} />
//          <Route path='/order' element={
//         <ProtectedRoute>
//           {/* <Element stripe={stripePromise}> */}
//         <Order/>
//         {/* </Element> */}
//         </ProtectedRoute>
//         } />
//          <Route path="/allorder" component={AllOrder} />
//           <Route path='/my-order' element={
//         <ProtectedRoute>
//           {/* <Element stripe={stripePromise}> */}
//         <MyOrder/>
//         {/* </Element> */}
//         </ProtectedRoute>
//         } />

// {/* <     Route path='/all-order' element={ */}
//         {/* <ProtectedRoute> */}
//           {/* <Element stripe={stripePromise}> */}
//         {/* <AllOrder/> */}
//         {/* </Element> */}
//         {/* </ProtectedRoute> */}
//         {/* } /> */}

        
//      </Routes>

    
//      <Footer/>
     
//     </>
//      )
// }

// export default App
//chat gpt

// import { useState } from 'react'
// import './App.css'
// import { Navbar } from './Shared/Navbar'
// import Home from './pages/Home'
// import Footer from './Shared/Footer'
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import ProtectedRoute from './pages/ProtectedRoute'
// import Addfood from './pages/admin/Addfood'
// import VerifyOtp from './pages/VerifyOtp'
// import Menu from './pages/Menu'
// import FoodPage from './pages/FoodPage'
// import Profile from './pages/Profile'
// import ViewCart from './pages/ViewCart'
// import Service from './component/Service';
// import Success from './pages/Success'
// import Cancel from './pages/Cancel'
// import Order from './pages/Order'
// import MyOrder from './pages/MyOrder'
// import NewOrderPage from './pages/NewOrderPage'
// import AllOrder from './pages/admin/AllOrder'; // Import AllOrder component
// import { useUserContext } from '../context/userContext'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/verifyOtp' element={<ProtectedRoute><VerifyOtp/></ProtectedRoute>} />
//         <Route path='/addfood' element={<ProtectedRoute><Addfood/></ProtectedRoute>} />
//         <Route path='/menu' element={<ProtectedRoute><Menu/></ProtectedRoute>} />
//         <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
//         <Route path='/menu/:id' element={<ProtectedRoute><FoodPage/></ProtectedRoute>} />
//         <Route path='/viewcart' element={<ProtectedRoute><ViewCart/></ProtectedRoute>} />
//         <Route path='/success' element={<ProtectedRoute><Success/></ProtectedRoute>} />
//         <Route path='/cancel' element={<ProtectedRoute><Cancel/></ProtectedRoute>} />
//         <Route path="/new-order" component={NewOrderPage} />
//         <Route path='/order' element={<ProtectedRoute><Order/></ProtectedRoute>} />
//         <Route path='/my-order' element={<ProtectedRoute><MyOrder/></ProtectedRoute>} />
//         <Route path='/all-order' element={<ProtectedRoute><AllOrder/></ProtectedRoute>} />
//       </Routes>
//       <Footer/>
//     </>
//   )
// }

// export default App
//new
import { useState } from 'react';
import './App.css';
import { Navbar } from './Shared/Navbar';
import Home from './pages/Home';
import Footer from './Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
import Addfood from './pages/admin/Addfood';
import VerifyOtp from './pages/VerifyOtp';
import Menu from './pages/Menu';
import FoodPage from './pages/FoodPage';
import Profile from './pages/Profile';
import ViewCart from './pages/ViewCart';
import Service from './component/Service';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Order from './pages/Order';
import { useUserContext } from '../context/userContext';
import MyOrder from './pages/MyOrder';
import NewOrderPage from './pages/NewOrderPage';
import TodaySpecial from './pages/todayspecial';
import WhyEatHappy from './pages/whyeathappy';
import AllOrder from './pages/admin/AllOrder';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/todayspecial' element={<TodaySpecial />} />
        <Route path="/whyeathappy" element={<WhyEatHappy />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verifyOtp' element={<ProtectedRoute><VerifyOtp/></ProtectedRoute>} />
        <Route path='/addfood' element={<ProtectedRoute><Addfood/></ProtectedRoute>} />
        <Route path='/menu' element={<ProtectedRoute><Menu/></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path='/menu/:id' element={<ProtectedRoute><FoodPage/></ProtectedRoute>} />
        <Route path='/viewcart' element={<ProtectedRoute><ViewCart/></ProtectedRoute>} />
        <Route path='/success' element={<ProtectedRoute><Success/></ProtectedRoute>} />
        <Route path='/cancel' element={<ProtectedRoute><Cancel/></ProtectedRoute>} />
        <Route path="/new-order" element={<ProtectedRoute><NewOrderPage/></ProtectedRoute>} />
        <Route path='/order' element={<ProtectedRoute><Order/></ProtectedRoute>} />
        <Route path="/allorder" element={<ProtectedRoute><AllOrder/></ProtectedRoute>} />
        <Route path='/myorder' element={<ProtectedRoute><MyOrder/></ProtectedRoute>} />
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
