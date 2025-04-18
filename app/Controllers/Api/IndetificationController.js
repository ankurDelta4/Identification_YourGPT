let { generateHmacToken } = require(baseDir() + "helper/helper") // Import the HMAC token generation function

module.exports = class IndetificationController{
// Controller function to handle visitor identity verification
async VisitorIdentityVerification(req, res){
    try {
        // Fech the visitor's unique ID, email, and phone number from the request body
        const { visitorUniqueId, visitorEmail, visitorPhone } = req.body;
        
        // Check if the visitor's unique ID, email, and phone number are provided
        // if (!visitorUniqueId || !visitorEmail || !visitorPhone) {
        //     return res.status(400).json({ message: 'Visitor unique ID, email, and phone number are required.' });
        // }

        // Fetch the secret key from the environment variables
        const secretKey = process.env.HMAC_SECRET_KEY || 'default_secret_key';

        // Generate the HMAC token using the visitor's unique ID, email, and phone number
        // Unique ID has more priority then email and then phone number

        // The HMAC token is generated using the secret key and the visitor's unique ID or email, or phone number
        //|| visitorEmail || visitorPhone
        const hmacToken = generateHmacToken(secretKey, visitorUniqueId ); 

        // Return the generated HMAC token as a response
        return res.status(200).json({ hmacToken });

    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error in VisitorIdentityVerification:', error);

        // Return an error response if any error occurs
        return res.status(500).json({ message: 'An error occurred during identity verification.' });        
    }
}
}