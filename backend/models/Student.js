
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    required: true,
    trim: true
  },
  yearLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
    validate: {
      validator: Number.isInteger,
      message: "Year level must be a whole number"
    }
  },
  section: {
    type: String,
    trim: true,
    default: undefined
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Student", studentSchema);
