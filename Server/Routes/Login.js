const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const router = express.Router();
// Connexion (Login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Tentative de login avec email: ${email}`);
  
    if (!email || !password) {
        console.log('Email ou mot de passe manquant');
        return res.status(400).json({ message: 'Email ou mot de passe manquant' });
    }
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Utilisateur non trouvé');
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Mot de passe incorrect');
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }
        // Générer un token JWT
        const token = jwt.sign({ userId: user._id, role: user.role }, 'hafsa', { expiresIn: '1h' });
        console.log('Login réussi, token généré:', token);
        res.json({ token, userId: user._id });
    } catch (error) {
        console.error('Erreur pendant le login :', error);
        res.status(500).send('Erreur du serveur');
    }
});
module.exports = router;