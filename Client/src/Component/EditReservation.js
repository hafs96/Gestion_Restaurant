import React, { useState } from 'react';

const ModifyReservationForm = ({ reservation, onUpdate }) => {
    const [formData, setFormData] = useState({
        clientid: reservation.clientid,
        table: reservation.table,
        datereservation: reservation.datereservation,
        heurereservation: reservation.heurereservation,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/api/reservations/${reservation._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedReservation = await response.json();
            onUpdate(updatedReservation.reservation);
            alert('Réservation mise à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la réservation:', error);
            alert('Erreur lors de la mise à jour de la réservation');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Client ID:
                <input
                    type="text"
                    name="clientid"
                    value={formData.clientid}
                    disabled
                />
            </label>
            <br />
            <label>
                Table:
                <select value={formData.table} onChange={handleChange}>
                    <option value="Table 1">Table 1</option>
                    <option value="Table 2">Table 2</option>
                    <option value="Table 3">Table 3</option>
                </select>
            </label>
            <br />
            <label>
                Date de réservation:
                <input
                    type="date"
                    name="datereservation"
                    value={formData.datereservation}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Heure de réservation:
                <input
                    type="time"
                    name="heurereservation"
                    value={formData.heurereservation}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Mettre à jour</button>
        </form>


    );
};


export default ModifyReservationForm;
