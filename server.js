const express = require('express');
const dotenv = require('dotenv');
const connectDb =require('.config/db');


dotenv.config();
connectDb();


const app = express();

app.use(express.json());

// Routes
const urlRoutes = require('./routes/urlRoutes');
app.use('/', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
