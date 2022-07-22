const Comment = require("../models/Comment");
const Route = require("../models/Route");
const User = require("../models/User");

const CommentController = {
  async create(req, res, next) {
    try {
      if (req.file) req.body.avatar = req.file.filename;
      
      
        const comment = await Comment.create({
          ...req.body,
          userId: req.user._id,
          routeId: req.params._id,
        });
        await Route.findByIdAndUpdate(req.params._id, {
          $push: { commentsId: comment._id },
        });
        await User.findByIdAndUpdate(req.user._id, {
          $push: { commentIds: comment._id },
        });
        res.status(201).send({message: "comentario creado", comment});
       
    } catch (error) {
      console.log(error);
      error.origin = "Comment";
      next(error);
    }
  },
  async delete(req, res) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params._id);
      res.send({ comment, message: "Comentario borrado" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al borrar el comentario" });
    }
  },
  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "actualizado", comment });
    } catch (error) {
      console.error(error);
    }
  },
  async getAll(req, res) {
    try {
      const comments = await Comment.find();
      res.send(comments);
    } catch (error) {
      console.error(error);
    }
  },  
};

module.exports = CommentController;
