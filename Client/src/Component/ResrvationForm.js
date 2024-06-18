import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservation } from '../contexts/ReservationContext';
import { AuthContext  } from '../contexts/AuthContext';
import '../styles/reservation.css';



const ReservationForm = () => {
    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { addReservation } = useReservation();
    const [table, setTable] = useState('');
    const [datereservation, setDatereservation] = useState('');
    const [heurereservation, setHeurereservation] = useState('');
  //   useEffect(() => {
  //     if (user) {
  //        setClientid(user.id); // Mettre à jour le clientid avec l'ID de l'utilisateur authentifié
  //     }
  //  }, [user]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const reservationData = {
            clientid:"6670b5e2ea9cfcf3ca0f0075",
            table,
            datereservation,
            heurereservation,
        };

        try {
            const response = await fetch('http://localhost:5000/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${user.token}` 
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                addReservation(jsonResponse);
                alert('Réservation créée avec succès');
                navigate('/');
            } else {
                alert('Erreur lors de la création de la réservation');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la création de la réservation');
        }
    };
  return (
    <div className="reservation-container">
      <h2>Reservation</h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
                {/* selectionner une table  */}
                <label htmlFor="table">Table</label>
                <select value={table} onChange={(e) => setTable(e.target.value)}>
                    <option value="Table 1">Table 1</option>
                    <option value="Table 2">Table 2</option>
                    <option value="Table 3">Table 3</option>
                </select>
            </div>
      <div className="form-group">
          <label htmlFor="date">Date de Réservation</label>
        <input
          type="date"
          value={datereservation}
          onChange={(e) => setDatereservation(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Heure de Réservation</label>
        <input
          type="time"
          value={heurereservation}
          onChange={(e) => setHeurereservation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Réserver</button>
    </form>
    </div>
  );
};

export default ReservationForm;
