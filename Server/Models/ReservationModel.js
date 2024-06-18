// models/Reservation.js

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  clientid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tableid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true,
  },
  datereservation: {
    type: Date,
    required: true,
  },
  heurereservation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
