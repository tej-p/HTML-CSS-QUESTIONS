const mongoose = require("mongoose");


const commentsSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    posts_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const Comments = mongoose.model("comments", commentsSchema); 