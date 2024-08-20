
import mongoose, { Schema } from "mongoose";


// Category Schema
const categorySchema = new Schema({
    name: { type: String, required: true }
  });
  

export const Category = mongoose.model("Category",categorySchema);