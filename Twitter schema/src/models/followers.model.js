const mongoose = require("mongoose");

const followersSchema = new mongoose.Schema(
  {
    follower_id: { type: String, required: true },
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

const Followers = mongoose.model("followers", followersSchema);
