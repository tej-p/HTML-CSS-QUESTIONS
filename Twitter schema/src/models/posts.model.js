const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Posts = mongoose.model("posts", postsSchema);
