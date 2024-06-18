const express = require('express');
const router = express.Router();
const Table = require('../Models/TableModel');

// GET toutes les tables disponibles
router.get('/tables/disponibles', async (req, res) => {
  try {
    const tablesDisponibles = await Table.find({ status: 'available' });
    res.json(tablesDisponibles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
