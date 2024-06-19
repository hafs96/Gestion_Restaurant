// routes/reservation.js
const express = require('express');
const router = express.Router();
const Reservation = require('../Models/ReservationModel');
const Joi = require('joi');

// Schema de validation pour la réservation
const reservationSchema = Joi.object({
    clientid: Joi.string().required(),
    table: Joi.string().required(),
    datereservation: Joi.date().required(),
    heurereservation: Joi.string().required()
});

// Route PUT pour mettre à jour une réservation spécifique
router.put('/reservations/:id', async (req, res) => {
    const { id } = req.params;
    const { clientid, table, datereservation, heurereservation } = req.body;

    try {
        // Vérifier si la réservation existe
        let reservation = await Reservation.findById(id);
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }

        // Valider les données reçues
        const { error } = reservationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'Validation error', details: error.details });
        }

        // Mettre à jour la réservation
        reservation.clientid = clientid;
        reservation.table = table;
        reservation.datereservation = datereservation;
        reservation.heurereservation = heurereservation;

        await reservation.save();

        res.json({ message: 'Réservation mise à jour avec succès', reservation });
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la réservation:', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation', error });
    }
});

module.exports = router;
