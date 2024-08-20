import mongoose, { Schema } from "mongoose";

// Ticket Schema
const ticketSchema = new Schema({
  qr: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  startDateAndTime: {
     type: Date, 
     required: true 
   },
  endDateAndTime: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        // `this` refers to the current document being validated
        return value > this.startDateAndTime;
      },
      message: 'End time must be after start time.'
    }
  },
  status: {
    type: String,
    enum: ["Available", "Used"],
    default: "Available",
    required: true,
  },
});







export const Ticket = mongoose.model("Ticket", ticketSchema);
