const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./config/db');


// Routes
const urlRoutes = require('./routes/urlRoutes');

const app = express();


dotenv.config();

connectDb();


// Middleware to parse JSON
app.use(express.json());


// Mount the router under /api/url
app.use('/', urlRoutes);
app.use('/api/url', urlRoutes);


// errorHandler.js
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

