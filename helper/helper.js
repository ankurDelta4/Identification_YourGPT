const crypto = require('crypto');

// Function to generate HMAC token
// This function takes a secret key and data as input and returns an HMAC token

 function generateHmacToken(secret, data) {
    try {
        // Check if secret and data are provided
        if (!secret || !data) {
            throw new Error('Secret and data are required to generate HMAC token.');
        }

        // Create HMAC using SHA256 algorithm with secret key
        const hmac = crypto.createHmac('sha256', secret);

        // Wrtie the data to be hashed
        hmac.write(data);

        // End the HMAC calculation
        hmac.end();

        // Return the HMAC token in hexadecimal format
        return hmac.read().toString('hex');
    } catch (error) {
        // Handle any errors that occur during HMAC generation
        console.error('Error generating HMAC token:', error);
        throw new Error('Failed to generate HMAC token.');
    }
}

module.exports = { generateHmacToken}