import React, { useState } from 'react';
import { useReservation } from '../contexts/ReservationContext';

const ReservationForm = () => {
    const { addReservation } = useReservation();
    const [clientid, setClientid] = useState('');
    const [tableid, setTableid] = useState('');
    const [datereservation, setDatereservation] = useState('');
    const [heurereservation, setHeurereservation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reservationData = {
            clientid,
            tableid,
            datereservation,
            heurereservation,
        };

        try {
            const response = await fetch('http://localhost:5000/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                addReservation(jsonResponse);
                alert('Réservation créée avec succès');
            } else {
                alert('Erreur lors de la création de la réservation');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la création de la réservation');
        }
    };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID Client:
        <input
          type="text"
          value={clientid}
          onChange={(e) => setClientid(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        ID Table:
        <input
          type="text"
          value={tableid}
          onChange={(e) => setTableid(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Date de Réservation:
        <input
          type="date"
          value={datereservation}
          onChange={(e) => setDatereservation(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Heure de Réservation:
        <input
          type="time"
          value={heurereservation}
          onChange={(e) => setHeurereservation(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Réserver</button>
    </form>
  );
};

export default ReservationForm;
