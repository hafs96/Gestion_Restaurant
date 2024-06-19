const express = require('express');
const router = express.Router();
const Reservation = require('../Models/ReservationModel');

//Route Pour afficher les reservations
router.get('/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la sélection des reservations', error });
    }
  });
  // Route pour supprimer une réservation par ID
router.delete('/reservations/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        res.json({ message: 'Réservation supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error });
    }
});

module.exports = router;