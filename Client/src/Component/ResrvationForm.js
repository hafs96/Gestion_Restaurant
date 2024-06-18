import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/signup.css';

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
                console.log('Tables fetched from backend:', response.data);
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
                date: formData.date,
                time: formData.time,
                numberOfPeople: formData.numberOfPeople,
                table: formData.table
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
        <div className="signup-container">
        <h2>Reservation</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date de reservation</label>
          <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required  />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure de reservation</label>
          <input type="time" name="time" placeholder="Time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPeople">Nombre de personnes</label>
          <input type="number" name="numberOfPeople" placeholder="Number of People" value={formData.numberOfPeople} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="table">Table</label>
          <select name="table" value={formData.table} onChange={handleChange} required>
            <option value="">Select Table</option>
            {tables.map(table => (
                <option key={table._id} value={table._id}>
                    Table {table.tableId} - chaises {table.nbr_chaises}
                </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn">Reserver</button>
        <hr /> <br />
        <a href="/home"><strong> Annuler</strong></a>
        </form>
        </div>
    );
};

export default ReservationForm;
