import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  departureAirport: {
    type: String,
    required: true,
  },
  arrivalAirport: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: {
    type: Map,
    of: String, 
    required: true,
  },
  flightClass: {
    type: String,
    enum: ['Economy', 'Business', 'First Class'],
    default: 'Economy',
  },
  status: {
    type: String,
    enum: ['On Time', 'Delayed', 'Cancelled'],
    default: 'On Time',
  },
});

export default mongoose.model('Flight', flightSchema);
