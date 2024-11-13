const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const Coach = require('../models/Coach');
const router = express.Router();
const authenticateCoach = require ('../middleware/authenticateCoach.js')

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

  // Validate input
  if (!receiverId || !message) {
    return res.status(400).json({ message: 'Receiver ID and message are required' });
  }

  try {
    // Find the user (receiver) by ID
    const user = await User.findById(receiverId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // The coach's data is available from req.user after authentication
    const coach = req.user;
    if (!coach) {
      return res.status(404).json({ message: 'Coach not found' });
    }

    // Set up Nodemailer transporter using coach's email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or any other email provider
      auth: {
        user: coach.email,  // Coach's email address
        pass: coach.emailPassword,  // Coach's email password or app password
      },
    });

    // Create the email details
    const mailOptions = {
      from: coach.email,  // Coach's email address
      to: user.email,     // The user's email address
      subject: 'Message from Your Coach',
      text: message,      // The message content
    };

    // Send the email via Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Message sent via email', info });
    });

    // Optionally, save the message in the Message model for tracking
    const newMessage = new Message({
      senderId: coach._id,
      receiverId: user._id,
      message: message,
    });
    await newMessage.save();

  } catch (err) {
    console.error('Server error:', err);
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
