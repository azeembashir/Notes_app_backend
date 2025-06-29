const express = require('express'); //install it
const app = express();
require('dotenv').config(); //install it
const db = require('./db');

const bodyParser = require('body-parser');  //install it
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const notesRoutes = require('./routes/notesRoutes');

app.use('/user', userRoutes);
app.use('/notes', notesRoutes);

app.listen(PORT, ()=> console.log('Listening on port 3000'));