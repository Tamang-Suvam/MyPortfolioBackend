const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  message: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 1
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;