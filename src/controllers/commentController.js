const CommentService = require("../services/commentService");

class CommentController {
  static async getAllComments(req, res) {
    try {
      const allComments = await CommentService.getAllComments();
      res.status(200).json(allComments);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getComment(req, res) {
    const { videoId } = req.params;
    try {
      const comments = await CommentService.getComment(videoId);
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addComment(req, res) {
    const { username, comment, videoId } = req.body;
    try {
      const newComment = await CommentService.createComment(
        username,
        comment,
        videoId
      );
      res.status(200).json(newComment);
      res.status(200).json("Comment saved successfully!");
    } catch (err) {
      res.status(500).json("Failed to save comment!");
    }
  }
}

module.exports = CommentController;
