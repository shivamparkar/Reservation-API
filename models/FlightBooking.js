import mongoose from 'mongoose';
import User from './User.js';

const FlightBookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',  
    required: true,
  },
  seat: {
    type: String,  
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ['Confirmed', 'Cancelled', 'Pending'],
    default: 'Pending',
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending',
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('FlightBooking', FlightBookingSchema);
