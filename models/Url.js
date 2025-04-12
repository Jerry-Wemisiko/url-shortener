//import mongoose to define schema 
const mongoose = require('mongoose');

//create a schema for the URL
const urlSchema = new mongoose.Schema({
    originalUrl:{// the full url user wants to shorten
        type: String,
        required: true, // original long url must be provided

    },
    shortId:{// unique identifier to acess  the original url
        type: String,
        required: true, // short id must be provided
        unique: true, // ensures eachshort is unique
    },shortUrl:{// the complete shortened url including the domain
        type: String,
        required: true, 
    },createdAt:{
        type: Date,
        default: Date.now, // auto-generate the date when the url is created

    }
});
//create and export the model from the schema
const Url = mongoose.model('Url', urlSchema);
module.exports = Url;