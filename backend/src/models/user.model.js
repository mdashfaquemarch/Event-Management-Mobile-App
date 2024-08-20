import mongoose, { Schema } from "mongoose";

// User Schema
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    lowecase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowecase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
  },
  avatar: {
    type: String, // cloudinary url
  },
  collegeName: {
    type: String,
    required: true,
    trim: true,
    lowecase: true,
  },
  branch: {
    type: String,
    required: true,
    trime: true,
    lowecase: true,
  },
  semester: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
    required: true,
  },
  section: {
    type: String,
    enum: ["A", "B", "C", "D", "N/A","OTHERS"],
    required: true,
    trime: true,
  },
  enrollment: {
    type: String,
    required: true,
    trime: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  eventPosted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  ticket: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

export const User = mongoose.model("User", userSchema);

//  schoarNumber implementation
