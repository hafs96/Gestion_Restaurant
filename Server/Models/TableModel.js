const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableId: {
        type: String, 
        required: true,
        unique: true
    },
    nbr_chaises: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'reserved'], 
        default: 'available'
    }
});

const table = mongoose.model('table', tableSchema);

module.exports = table;
