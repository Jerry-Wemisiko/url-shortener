// import the mongoose library to enable MongoDB interactions 
const mongoose = require('mongoose');

//funcn to connect to mongoDB
const connectDB = async () => {
    try{
        //try connecting using URI in .env file
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, // Use new MongoDB URL parser
            useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
        });
        // if successful, log the connection info
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch (error) {
        //if connection fails log error and terminate the process
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

//export the connectDB function to be used in other files i.e server.js
module.exports = connectDB;