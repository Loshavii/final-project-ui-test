const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const Coach = require('../models/Coach');
const router = express.Router();
const authenticateCoach = require ('../middleware/authenticateCoach,js')

// Middleware to check if the coach is authorized to send a message
// const authenticateCoach = (req, res, next) => {
//   if (!req.user || req.user.role !== 'coach') {
//     return res.status(403).json({ message: 'Unauthorized' });
//   }
//   next();
// };

// Route to send a message
router.post('/send', authenticateCoach, async (req, res) => {
    const { receiverId, message } = req.body;
  
    // Validate the input
    if (!receiverId || !message) {
      return res.status(400).json({ message: 'Receiver ID and message are required' });
    }
  
    try {
      // Check if the user exists
      const user = await User.findById(receiverId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the coach exists (already done by authenticateCoach middleware)
      const coach = req.user; // The coach's data is available via req.user
      if (!coach) {
        return res.status(404).json({ message: 'Coach are not found' });
      }
  
      // Create the message
      const newMessage = new Message({
        senderId: coach._id,
        receiverId: user._id,
        message: message
      });
  
      // Save the message to the database
      await newMessage.save();
  
      // Respond with success
      res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Route to get messages for a user (could be part of user dashboard)
router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Get all messages for the user
    const messages = await Message.find({ receiverId: userId })
      .populate('senderId', 'name email')  // Populate coach details
      .sort({ timestamp: -1 }); // Latest messages first

    res.status(200).json({ messages });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get messages sent by a coach (could be part of coach dashboard)
router.get('/coach/:coachId', async (req, res) => {
  const coachId = req.params.coachId;

  try {
    // Get all messages sent by the coach
    const messages = await Message.find({ senderId: coachId })
      .populate('receiverId', 'name email')  // Populate user details
      .sort({ timestamp: -1 });

    res.status(200).json({ messages });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
