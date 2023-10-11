const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true
  },
  Lname: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Postal: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Note", RegisterSchema);
