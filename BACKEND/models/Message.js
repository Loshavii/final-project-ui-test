// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   senderId: { // The coach who sends the message
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Coach',
//     required: true
//   },
//   receiverId: { // The user who receives the message
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   message: { // The content of the message
//     type: String,
//     required: true
//   },
//   timestamp: { // Time when the message was sent
//     type: Date,
//     default: Date.now
//   }
// });

// const Message = mongoose.model('Message', messageSchema);

// module.exports = Message;
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
