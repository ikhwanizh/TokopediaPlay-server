const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    videoId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

module.exports = mongoose.model("comments", commentSchema);
