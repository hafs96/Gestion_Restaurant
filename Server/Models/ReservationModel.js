const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    reservationid: {
         type: String, required: true 
    },
    clientid: { 
        type: String, required: true
     },
    tableid: { 
        type: String, required: true
     },
    datedatereservation: {
        type: Date,
        required: true
    },
    heurereservation: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
