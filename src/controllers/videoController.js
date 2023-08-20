const serverLogger = require("../../logger/server.logger");
const VideoService = require("../services/videoService");

class VideoController {
  static async getAllVideos(req, res) {
    serverLogger.info("VideoController::getAllVideos");
    try {
      const allVideos = await VideoService.getAllVideos();
      res.status(200).json(allVideos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addVideo(req, res) {
    const { imageUrl, videoUrl } = req.body;
    console.log("imageUrl:::", imageUrl);
    try {
      const newVideo = await VideoService.addVideo(imageUrl, videoUrl);
      res.status(200).json(newVideo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getVideoById(req, res) {
    const { videoId } = req.params;
    try {
      const video = await VideoService.getVideoById(videoId);
      res.status(200).json(video);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = VideoController;
