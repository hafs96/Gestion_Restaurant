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

module.exports = router;