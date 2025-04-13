const Url = require('../models/Url'); // Import the Url model

const generateShortId = require('../utils/generateShortId'); // Import the function to generate short IDs

const BASE_URL = process.env.BASE_URL // get the base URL from the environment variables

/**
 * creates a shoretened URL document and saves it to the satabase
 * @param {string} originalUrl - The full original URL to be shortened-provided by user
 * @returns {object} - the saved url document containing original and shortened urls
 */
 
const createShortUrl = async (originalUrl) => {
    ///check if the priginal url has already been shortened before
    const existing = awit = await Url.findOne({originalUrl});
    if (existing ){
        return existing; // reuse existing shortened URL to prevent duplicates
    }

    //generate a unique short ID
    const shortId = generateShortId(6); // Generate a 6-character short ID

    //create the shortened URL using base_URL and shortId

    const shortUrl = `${BASE_URL}/${shortId}`; // Constructing the shortened URL

    //save the new URL document to the database-momgoDB
    const newUrl = new Url({
        originalUrl,
        shortId,
        shortUrl,});

    //save the document to the database
    await newUrl.save();

    return newUrl; // Return the saved URL document

    };

    /**
     * Finds the original URL based on a short ID.
     * @param {string} shortId - The unique ID from the shortened URL.
     * @returns {object|null} - The found URL document or null if not found
     */

    const getOriginalUrl = async (shortId) => {

        return await Url.findOne({ shortId }); // Find the URL document by short ID
    };

    //export the functions to be used in the controller
    module.exports = {
        createShortUrl,
        getOriginalUrl,
    };
// This code defines a URL shortening service using Node.js and MongoDB.