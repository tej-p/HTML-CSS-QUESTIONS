const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstNmae: { type: String, required: true },
    lastName: { type: String },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { typeString, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
