import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';


const ReservationForm = () => {
  const [tableid, setTableid] = useState('');
  const [datereservation, setDatereservation] = useState('');
  const [heurereservation, setHeurereservation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/reservations', {
        tableid,
        datereservation,
        heurereservation
      });
      console.log('Reservation created:', response.data);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

    return (
        <div className="signup-container">
        <h2>Reservation</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="table">Table</label>
          <input type="text" placeholder="ID Table" value={tableid} onChange={(e) => setTableid(e.target.value)} required/>
        </div>
       
        <div className="form-group">
          <label htmlFor="date">Date de reservation</label>
          <input type="date" name="date" value={datereservation} onChange={(e) => setDatereservation(e.target.value)} required  />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure de reservation</label>
          <input type="time" name="time" value={heurereservation} onChange={(e) => setHeurereservation(e.target.value)} required />
        </div>
        
      
        <button type="submit" className="btn">Réserver</button>
        <hr /> <br />
        <a href="/"><strong> Annuler</strong></a>
        </form>
        </div>
    );
};

export default ReservationForm;
