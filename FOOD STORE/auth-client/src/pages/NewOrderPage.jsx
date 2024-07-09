import React, { useState } from 'react';
import { useCartContext } from '../../context/cardContext';

const NewOrderPage = () => {
    const { cartItems } = useCartContext();
    const [address, setAddress] = useState('');

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleSubmitOrder = () => {
        // Handle submitting the order with the address and other details
        // You can use this function to send the order details to your backend or perform any other action
        console.log("Order submitted with address:", address);
        // You can also clear the cart or perform any other necessary actions here
    }

    return (
        <div className="container mx-auto py-6">
            <h1 className="font-semibold text-2xl mb-4">New Order</h1>
            <div className="bg-white px-10 py-5 text-black rounded-md">
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        rows="3"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your address..."
                        value={address}
                        onChange={handleAddressChange}
                    />
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Items Price:</span>
                    <span>${itemsPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Tax Price:</span>
                    <span>${taxPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Shipping Price:</span>
                    <span>${shippingPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2">
                    <span className="font-semibold">Total Price:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button
                    className="btn mt-4 text-white bg-red-500 hover:bg-red-600"
                    onClick={handleSubmitOrder}
                >
                    Submit Order
                </button>
            </div>
        </div>
    );
}

export default NewOrderPage;
