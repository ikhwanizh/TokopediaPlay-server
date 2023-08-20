const { connect } = require("../../config/db.config");
const Video = require("../models/videoModel");

class VideoRepository {
  constructor() {
    connect();
  }

  static async getAllVideos() {
    const videos = await Video.find({});
    console.log("movies:::", videos);
    return videos;
  }

  static async addVideo(imageUrl, videoUrl) {
    try {
      const newVideo = await Video.create({ imageUrl, videoUrl });
      console.log("Video saved successfully!");
      return newVideo;
    } catch (err) {
      console.log(err);
    }
  }

  static async getVideoById(videoId) {
    try {
      const video = await Video.findById(videoId);
      return video;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = VideoRepository;
