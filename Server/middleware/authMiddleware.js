const jwt = require('jsonwebtoken');
const User = require('../Models/User');

module.exports = async function(req, res, next) {
  // Récupère le token depuis l'en-tête
  const token = req.header('x-auth-token');

  // Vérifie s'il y a un token
  if (!token) {
    return res.status(401).json({ msg: 'Pas de token, autorisation refusée' });
  }

  try {
    // Vérifie le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ajoute l'utilisateur depuis le token vérifié
    req.user = await User.findById(decoded.user.id).select('-Password');
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: 'Token non valide' });
  }
};
