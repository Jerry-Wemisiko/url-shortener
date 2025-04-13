const express = require('express');
const router = express.Router();

//IMport controller functions
const {
    shortenUrl,
    redirectToOriginal
} = require ('../controllers/urlController');

//@route POST /shorten
//@desc  Accepts a long URL an returns a shortened one
router.post('/shorten', shortenUrl);

//@route GET /:shortId
//@desc  Redirects to the original URL
router.get('/:shortId',redirectToOriginal);


//POST /shorten: For creating a new short URL.
//GET /:shortId: For redirecting from a short URL to the original.


module.exports = router
