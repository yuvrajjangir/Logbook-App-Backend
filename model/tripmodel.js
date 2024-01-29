const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    departureOdometer: {
      type: Number,
      required: true,
    },
    car: {
      type: String,
      default: 'Default Car'
    },
    arrivalOdometer: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true
    },
    reason: {
      type: String,
      enum: ['Site visit', 'Client meeting', 'Delivery', 'Team Meetings'],
      required: true,
    },
    time: {
      type: String,
    },
    leavingFrom: String, 
    goingTo: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  });
  
  const TripModel = mongoose.model('Trip', tripSchema);

  module.exports = {TripModel};