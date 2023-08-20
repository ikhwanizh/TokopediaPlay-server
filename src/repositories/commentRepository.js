const { connect } = require("../../config/db.config");
const Comment = require("../models/commentModel");

class CommentRepository {
  constructor() {
    connect();
  }

  static async createComment(username, comment, videoId) {
    try {
      const newComment = await Comment.create({
        username,
        comment,
        videoId,
      });
      console.log("comment saved");
      return newComment;
    } catch (error) {
      console.log(error);
    }
  }

  static async getComment(videoId) {
    try {
      const comments = await Comment.find({ videoId });
      return comments;
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllComments() {
    try {
      const comments = await Comment.find();
      return comments;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CommentRepository;
