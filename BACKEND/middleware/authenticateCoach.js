const jwt = require('jsonwebtoken');
const Coach = require('../models/Coach.js'); // Adjust the path if necessary

const authenticateCoach = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided, authorization denied' });
    }
    
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the correct secret key

    // Find the coach by ID from the token payload
    const coach = await Coach.findById(decoded.id);  // Assuming `coachId` is stored in the token
    if (!coach) {
      return res.status(404).json({ message: 'Coach is not found' });
    }

    // Attach the coach to the request object for later use
    req.user = coach;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authenticateCoach;
