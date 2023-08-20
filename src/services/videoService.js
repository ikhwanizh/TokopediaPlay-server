const logger = require("pine/lib/logger");
const VideoRepository = require("../repositories/videoRepository");

class VideoService {
  constructor() {}

  static async getAllVideos() {
    console.log("VideoService::getAllVideos");
    return await VideoRepository.getAllVideos();
  }

  static async addVideo(imageUrl, videoUrl) {
    console.log("VideoService::addVideo ");
    console.log("imageUrl:::", imageUrl);
    return await VideoRepository.addVideo(imageUrl, videoUrl);
  }

  static async getVideoById(videoId) {
    return await VideoRepository.getVideoById(videoId);
  }
}

module.exports = VideoService;
