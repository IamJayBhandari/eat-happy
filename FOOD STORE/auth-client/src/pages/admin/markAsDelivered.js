import axios from 'axios';

const markAsDelivered = async (orderId, token) => {
    try {
        await axios.put(`http://localhost:8000/api/v1//orders/${_id}/delivered`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true; // Indicate success
    } catch (error) {
        console.error('Error marking order as delivered:', error);
        return false; // Indicate failure
    }
};

export default markAsDelivered;
