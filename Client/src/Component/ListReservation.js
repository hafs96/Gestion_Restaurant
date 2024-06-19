import React, { useState, useEffect } from 'react';
import '../styles/reservation.css';


const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/reservations', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${user.token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setReservations(data); // Met à jour l'état des réservations avec les données reçues
                } else {
                    console.error('Erreur lors de la récupération des réservations:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des réservations:', error);
            }
        };

        fetchReservations(); // Appel de la fonction pour récupérer les réservations au chargement du composant
    }, []);
    const deleteReservation = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/reservations/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setReservations(reservations.filter(reservation => reservation._id !== id));
                alert('Réservation supprimée avec succès');
            } else {
                alert('Erreur lors de la suppression de la réservation');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de la réservation:', error);
            alert('Erreur lors de la suppression de la réservation');
        }
    };


    return (
        <div className="reser-container">
            <h2>Liste des Réservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation._id}>
                        <div className="fr">
                            <p><strong>Client reserve : </strong> {reservation.clientid}</p>
                            <p><strong>Table reserve : </strong>{reservation.table}</p>
                            <p><strong>Date de reservation : </strong>{reservation.datereservation}</p>
                            <p><strong>Heure de reservation : </strong>{reservation.heurereservation}</p>
                            {/* action pour supprimer reservation */}
                            <button onClick={() => deleteReservation(reservation._id)}>Annuler</button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
