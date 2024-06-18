import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        numberOfPeople: '',
        userId: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/reservations', formData);
            console.log(response.data);
            alert('Reservation successful!');
        } catch (error) {
            console.error(error);
            alert('Error during reservation.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            <input type="number" name="numberOfPeople" placeholder="Number of People" value={formData.numberOfPeople} onChange={handleChange} required />
            <button type="submit">Reserve</button>
        </form>
    );
};

export default ReservationForm;
