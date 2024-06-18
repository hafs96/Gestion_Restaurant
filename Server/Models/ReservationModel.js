const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'table', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);