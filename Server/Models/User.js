const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['client', 'responsable'], default: 'client' }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
