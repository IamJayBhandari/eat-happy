import axios from 'axios';

const cancelOrder = async (orderId, token) => {
    try {
        await axios.put(`http://localhost:8000/api/v1/order/orders/${orderId}/cancel`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true; // Indicate success
    } catch (error) {
        console.error('Error canceling order:', error);
        return false; // Indicate failure
    }
};

export default cancelOrder;
