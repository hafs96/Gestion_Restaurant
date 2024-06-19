// routes/reservation.js

const express = require('express');
const router = express.Router();
const Reservation = require('../Models/ReservationModel');
const Joi = require('joi');
// Route POST pour créer une nouvelle réservation
// Schéma de validation Joi pour les réservations
const reservationSchema = Joi.object({
  clientid: Joi.string().required(),
  table: Joi.string().required(),
  datereservation: Joi.date().required(),
  heurereservation: Joi.string().required(),
}).options({ allowUnknown: true });

// Route POST pour créer une nouvelle réservation
router.post('/api/reservation', async (req, res) => {
  console.log('Requête reçue pour créer une réservation :', req.body);

  // Valider les données reçues avec Joi
  const { error } = reservationSchema.validate(req.body);

  if (error) {
      return res.status(400).json({ message: 'Validation error', details: error.details });
  }

  // Extraire les données de la requête
  const { clientid, table, datereservation, heurereservation } = req.body;

  try {
      // Créer une nouvelle instance de réservation
      const newReservation = new Reservation({
          clientid,
          table,
          datereservation,
          heurereservation
      });

      // Enregistrer la nouvelle réservation dans la base de données
      await newReservation.save();

      // Répondre avec succès et renvoyer la nouvelle réservation
      res.status(201).json({ message: 'Réservation créée avec succès', reservation: newReservation });
  } catch (error) {
      // Gérer les erreurs de serveur
      res.status(500).json({ message: 'Erreur lors de la création de la réservation', error });
  }
});

module.exports = router;