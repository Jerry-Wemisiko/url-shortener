//import mongoose to define schema 
const mongoose = require('mongoose');

//create a schema for the URL
const urlSchema = new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true, // original long url must be provided

    },
    shortId:{
        type: String,
        required: true, // short id must be provided
        unique: true, // ensures eachshort is unique
    },shortUrl:{
        type: String,
        required: true, // the complete shortened url
    },createdAt:{
        type: Date,
        default: Date.now, // auto-generate the date when the url is created

    }
});
//create and export the model from the schema
const Url = mongoose.model('Url', urlSchema);
module.exports = Url;