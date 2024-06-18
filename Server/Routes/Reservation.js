const express = require('express');
const router = express.Router();
const Reservation = require('../Models/ReservationModel');
const Table = require('../Models/TableModel');
const verifyToken = require('../middleware/authMiddleware');


// POST pour créer une nouvelle réservation
router.post('/reservations', verifyToken, async (req, res) => {
    const { tableid, datereservation, heurereservation } = req.body;
    const clientid = req.clientid;

  try {
    // Vérifier si la table est disponible
    const table = await Table.findById(tableid);
    if (!table || table.status !== 'available') {
      return res.status(400).json({ message: 'La table spécifiée n\'est pas disponible pour la réservation.' });
    }
    // Créer la réservation
    const newReservation = new Reservation({
      clientid,
      tableid,
      datereservation,
      heurereservation
    });

    // Mettre à jour le statut de la table à 'reserved'
    table.status = 'reserved';
    await table.save();

    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
