import mongoose, { Schema } from "mongoose";

// Event Schema
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  }, // Assuming this is a URL or path to the image
  address: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  userIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});



// Virtual field to check if booking is still open
eventSchema.virtual('isBookingOpen').get(function() {
  return new Date() < this.endDateAndTime;
});




export const Event = mongoose.model("Event", eventSchema);
