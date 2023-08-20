const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
  imageUrl: "string",
  videoUrl: "string",
});

const Video = mongoose.model("videos", videoSchema);
module.exports = Video;
