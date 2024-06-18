// routes/reservation.js

const express = require('express');
const router = express.Router();
const Reservation = require('../Models/ReservationModel');
const Joi = require('joi');

// Route POST pour créer une nouvelle réservation
const reservationSchema = Joi.object({
  clientid: Joi.string().required(),
  table: Joi.string().required(),
  datereservation: Joi.date().required(),
  heurereservation: Joi.string().required()
});

router.post('/api/reservation', async (req, res) => {
  console.log('Requête reçue pour créer une réservation :', req.body);
  const { error } = reservationSchema.validate(req.body);

  if (error) {
      return res.status(400).json({ message: 'Validation error', details: error.details });
  }

  const { clientid, table, datereservation, heurereservation } = req.body;

  try {
      const newReservation = new Reservation({
          clientid,
          table,
          datereservation,
          heurereservation
      });

      await newReservation.save();
      res.status(201).json({ message: 'Réservation créée avec succès', reservation: newReservation });
  } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création de la réservation', error });
  }
});

module.exports = router;
