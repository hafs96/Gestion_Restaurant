const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Reservation = require('../Models/ReservationModel');

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.post('/add', async (req, res) => {
  try {
    const { clientId, tableId, date, time, guests } = req.body;
    const reservation = new Reservation({ clientId, tableId, date, time});
    await reservation.save();
    res.status(201).json(newReservation);
  }catch (error) {
      res.status(400).json({ message: error.message });
  }

  });
  


module.exports = router;
