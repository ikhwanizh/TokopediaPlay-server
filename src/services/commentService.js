const CommentRepository = require("../repositories/CommentRepository");

class CommentService {
  constructor() {}

  static async createComment(username, comment, videoId) {
    return await CommentRepository.createComment(username, comment, videoId);
  }

  static async getComment(videoId) {
    return await CommentRepository.getComment(videoId);
  }

  static async getAllComments() {
    return await CommentRepository.getAllComments();
  }
}

module.exports = CommentService;
