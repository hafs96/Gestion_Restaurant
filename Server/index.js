const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const reservationRoutes = require('./Routes/Reservation');
const listeRoutes=require('./Routes/liste');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 



mongoose.connect('mongodb://localhost:27017/dbrestaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const tableRoutes = require('./Routes/Table');
app.use('/api/tables', tableRoutes);
app.use('/api/auth', require('./Routes/auth'));
app.use('/api', require('./Routes/Login'));
app.use('/',reservationRoutes);
app.use('/api',listeRoutes);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});