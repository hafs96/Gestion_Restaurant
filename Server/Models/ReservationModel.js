const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  guests: Number,
});

module.exports = mongoose.model('Reservation', reservationSchema);
