import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        numberOfPeople: '',
        table: '',
    });
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Récupérer les tables depuis le backend
        const fetchTables = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tables');
                setTables(response.data);
            } catch (error) {
                console.error('Error fetching tables:', error);
            }
        };

        fetchTables();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reservationData = {
                ...formData,
                user: userId
            };
            const response = await axios.post('http://localhost:5000/api/reservations', reservationData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
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
            <select name="table" value={formData.tableId} onChange={handleChange} required>
                <option value="">Select Table</option>
                {tables.map(table => (
                    <option key={table._id} value={table._id}>
                        Table {table.tableId} - chaises {table.nbr_chaises}
                    </option>
                ))}
            </select>
            <button type="submit">Reserver</button>
        </form>
    );
};

export default ReservationForm;
