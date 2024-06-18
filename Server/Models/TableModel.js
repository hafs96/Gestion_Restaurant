const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  tableid: { type: String, required: true },
  status: { type: String, enum: ['available', 'reserved', 'occupied'], default: 'available' },
  nbr_chaises: { type: Number, required: true },
  prix: {type: Number, required: true }
});

module.exports = mongoose.model('Table', TableSchema);
