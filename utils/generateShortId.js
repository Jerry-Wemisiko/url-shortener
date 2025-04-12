// utility funn to gen a short unique ID for  a Url
// we use node build in crypto module to generate a random  byte
const crypto = require('crypto');

/**
 * Generates a short alphanumeric ID using crypto
 * @param {number} length - Length of the ID (default is 6)
 * @returns {string} A random alphanumeric string
 */

const generateShortId = (length = 6) => {
      // Generate random bytes, convert to base64, remove non-alphanumeric chars, and slice
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('base64') // Convert to base64
            .replace(/\+/g, '0') // replace '+' with '0'                
            .replace(/\//g, '1') // replace '/' with '1'    
            .replace(/=+$/, '') // Remove trailing '='
            .substring(0, length) // Limit to the desired length
};

module.exports = generateShortId;
