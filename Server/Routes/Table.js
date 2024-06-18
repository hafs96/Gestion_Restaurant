const express = require('express');
const Table = require('../Models/TableModel');

const router = express.Router();

// Route pour récupérer les tables
router.get('/api/tables', async (req, res) => {
    try {
         const tables = await Table.find();
         console.log('Tables fetched:', tables);
         res.json(tables);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

