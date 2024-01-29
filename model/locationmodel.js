const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  });
  
  const Person = mongoose.model('Person', personSchema);
  
  module.exports = {Person};