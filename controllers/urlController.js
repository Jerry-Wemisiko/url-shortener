//import the service layer
const {createShortUrl, getOriginalUrl} = require('../services/urlService');

//Controller function to handle URL shortening requests.

/**  
 * 
 * @desc Handles POST request to shorten a URL
 * @route POST /shorten
 * @access Public
 */

const shortenUrl = async (req, res) => { 
     //shortenUrl(req, res): Accepts a long URL and returns a shortened version.
    const {originalUrl} = req.body;

    //Validate input URL - error handling
    if (!originalUrl || typeof originalUrl !== 'string') {
        return res.status(400).json({error: 'Invalid URL  provide a valid one'});
    }

    try{
        //call service to create or fetch the short URL
        const shortUrlDoc = await createShortUrl(originalUrl);
        return res.status(201).json(shortUrlDoc); // Return the created URL document
    }catch (err){
        console.error('Error creating short URL:', err).message;
        return res.status(500).json({error: 'Internal server error while shortening URL'});
    }    
};

/**
 * @desc    Handles redirection from short URL to original
 * @route   GET /:shortId
 * @access  Public
 */

const redirectToOriginal = async (req, res) => {
    //redirectToOriginal(req, res): Takes a short/unique ID and redirects to the original URL.
    const {shortId} = req.params;

    try{
        //call service to get the original URL
        const urlDoc = await getOriginalUrl(shortId);

        if (!urlDoc){
            return res.redirect(urlDoc.originalUrl); // Redirect to the original URL

        }else 
        return res.status(404).json({error: 'short URL not found'}); // Handle case where URL is not found

    }catch (err){
        console.error('Error redirecting to original URL:', err.message);
        return res.status(500).json({error: 'Internal server error while redirecting URL'});
    }
};
// Export the controller functions
module.exports = {
    shortenUrl,
    redirectToOriginal,
};
// This code defines a controller for handling URL shortening and redirection.
// It includes functions to shorten a URL and redirect from a short URL to the original URL.
// The controller uses a service layer to interact with the database and handle business logic.
// The controller also includes error handling for invalid input and server errors.

