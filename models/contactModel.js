const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: Number,
      required: [true, "phone is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contactModel", contactSchema);
