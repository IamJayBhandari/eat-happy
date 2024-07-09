// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import {toast,ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'
// import logo from "../../assets/Logo.svg"
// import { useState } from 'react';

// const Addfood = () => {
//     const [image,setImage] = useState({})
//     const [uploading , setUploading]= useState(false)
//     const handleImage= async (e) => {
//         const file = e.target.files[0]
//         let formData= new FormData()
//         formData.append('image', file) 
//         setUploading(true)
//         try{
//             const {data}=await axios.post('http://localhost:8000/api/v1/all/upload-image', formData)
//             setUploading(false)
//             setImage({
//                 url : data.url,
//                 public_id : data.public_id
//             })
//             if(uploading === false){
//                 toast.success('Succesfully uploaded')
//             }
            
//         } catch (error) {
//             console.log(error)
//         }

//     }

//     const handleSubmit = async(event) => {
//         event.preventDefault()
//         const from = event.target;
//         const name = from.name.value;
//         const price = from.price.value;
//         const catagory = from.catagory.value; 
//         const weight = from.weight.value;
//         const location = from.location.value;
//         const description = from.description.value;
//         const foodImage = image?.url
//         const foodData = { name,price,foodImage,catagory,weight,location,description };

//         const res = await axios.post("http://localhost:8000/api/v1/food/addfood", { name,price,foodImage,catagory,weight,location,description }, {
//             headers : {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`
//             }
//         })
//         if(res.data.success) {
//             toast.success(res.data.message)
//             form.reset();
//         }else {
//             toast.error(res.data.message)
            
//         }
//     }
//   return (
//    <div className="addfood">
//      <div className="w-full mx-auto pt-[16vh]">
//             <form className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5 'onSubmit={handleSubmit}>
//                 {/* <label htmlFor='file-upload' className='custom-file-upload'>
//                     <img src={image?.url || avater} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer" />

//                 </label>
//                 <label className='block text-center text-gray-900 text-base mb-2'>Profile Picture</label>
//                 <input type="file" label="Image" name='myfile' id='file-upload' className='hidden' accept='.jpeg, .png, .jpg' onChange={handleImage}/> */}
                
//                 <NavLink to="/">
//                     <img  src={logo} alt="" className="logo mx-auto h-24 w-24 cursor-pointer mb-6 cursor-pointer text-center" />
//                 </NavLink>
               
//                 <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
              
                    
//                     <input type="text" placeholder='Enter food Name' name="name" className="input input-bordered shadow-sm bg-white apperance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          
                
//                 <input type="file" name='myfile' accept='.jpeg, .png, .jpg' className="file-input file-input-bordered bg-red-500 text-white file-input-md w-full max-w-xs" onChange={handleImage}/>
               
              
//                     <input type="Number" placeholder='Enter price' name="price" className="shadow-sm bg-white apperance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
               
//                     <select className="select bg-red-500 text-white select-md w-full max-w-xs" name='catagory'>
//                     <option disabled selected>Catagory</option>
//                     <option>Rice</option>
//                     <option>Desert</option>
//                     <option>Drinks</option>
//                     <option>Fruits</option>
//                     <option>Fast Food</option>
//                     </select>
//                     <input type="Number" placeholder='Enter Weight' name="weight" className="shadow-sm bg-white apperance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//                     <input type="text" placeholder='Enter location' name="location" className="shadow-sm bg-white apperance-none border rounded w-full py-2 px-3   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//                     <textarea className="shadow-sm bg-white apperance-none border rounded w-full py-2 px-3  col-span-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea textarea-ghost" name="description" placeholder="Description"></textarea>
//                 </div>
                
                
//                 <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5 type='submit'">Add Food</button>

                    
//                     <ToastContainer />

                
//             </form>
//         </div>
//    </div>
//   )
// }

// export default Addfood
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from "../../assets/Logo.svg";

const Addfood = () => {
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);

    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        setUploading(true);
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/all/upload-image', formData);
            setImage({
                url: data.url,
                public_id: data.public_id
            });
            toast.success('Successfully uploaded');
        } catch (error) {
            console.log(error);
            toast.error('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const weight = form.weight.value;
        const location = form.location.value;
        const description = form.description.value;
        const foodImage = image.url;
        const foodData = { name, price, foodImage, category, weight, location, description };

        try {
            const res = await axios.post("http://localhost:8000/api/v1/food/addfood", foodData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            if (res.data.success) {
                toast.success(res.data.message);
                form.reset();
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to add food');
        }
    };
    // const handleDelete = async (foodId) => {
    //     try {
    //         const res = await axios.delete(`http://localhost:8000/api/v1/food/${foodId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`
    //             }
    //         });
    //         if (res.data.success) {
    //             toast.success(res.data.message);
    //             // Optionally, you can update the UI to remove the deleted food item
    //         } else {
    //             toast.error(res.data.message);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Failed to delete food');
    //     }
    // };

    return (
        <div className="addfood">
            <div className="w-full mx-auto pt-[16vh]">
                <form className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5 ' onSubmit={handleSubmit}>
                    <NavLink to="/">
                        <img src={logo} alt="" className="logo mx-auto h-24 w-24 cursor-pointer mb-6 cursor-pointer text-center" />
                    </NavLink>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
                        <input type="text" placeholder='Enter food Name' name="name" className="input input-bordered shadow-sm bg-white appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <input type="file" name='myfile' accept='.jpeg, .png, .jpg' className="file-input file-input-bordered bg-red-500 text-white file-input-md w-full max-w-xs" onChange={handleImage} />
                        <input type="Number" placeholder='Enter price' name="price" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <select className="select bg-red-500 text-white select-md w-full max-w-xs" name='category'>
                            <option disabled selected>category</option>
                            <option>Rice</option>
                            <option>Desert</option>
                            <option>Drinks</option>
                            <option>Fruits</option>
                            <option>Fast Food</option>
                            <option>Home Food</option>
                            <option>Indian</option>
                        </select>
                        <input type="Number" step="any" placeholder='Enter Weight' name="weight" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <input type="text" placeholder='Enter location' name="location" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <textarea className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 col-span-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea textarea-ghost" name="description" placeholder="Description"></textarea>
                    </div>
                    <button type="submit" className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5">Add Food</button>
                  
                </form>
                {/* <button onClick={() => handleDelete(foodId)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button> */}
                <ToastContainer />
            </div>
        </div>
    );
}

export default Addfood;
