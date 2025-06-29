const mongoose = require('mongoose');   //install it
// import bcrypt
const bcrypt = require('bcrypt');       //install itd
const User = require('./user');

// define the notes schema
const notesSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to User model
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;