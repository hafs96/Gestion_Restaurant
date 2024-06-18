const express = require('express');
const jwt = require('jsonwebtoken');
const Reservation = require('../Models/ReservationModel');

const router = express.Router();

router.post('/reservations', async (req, res) => {
    const { date, time, numberOfPeople, tableId } = req.body;

    try {
        // Valider l'utilisateur avec le token JWT
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'hafsa');
        const userId = decodedToken.userId;

        const newReservation = new Reservation({
            user: userId,
            table: tableId,
            date,
            time,
            numberOfPeople
        });

        await newReservation.save();

        res.status(201).json({ msg: 'Reservation successful', reservation: newReservation });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
