const Comment = require("../models/Comment");
const Route = require("../models/Route");

const CommentController = {
  async create(req, res, next) {
    try {
      if (req.file) req.body.avatar = req.file.filename;
      const exist = await Route.findById(req.body.routeId);
      if (exist) {
        const comment = await Comment.create({
          ...req.body,
          userId: req.user._id,
          routeId: req.body.routeId,
        });
        await Route.findByIdAndUpdate(req.body.routeId, {
          $push: { comments: comment._id },
        });
        res.status(201).send(comment);
      } else res.status(400).send({ message: "No se encuentra la ruta" });
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
  async like(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);
      if (!comment)
        return res.status(400).send({
          message: "You cant't give a like to a comment that doesn't exist",
        });
      const exist = await Comment.findById(req.params._id);
      if (!exist.likes.includes(req.user._id)) {
        const comment = await Comment.findByIdAndUpdate(
          req.params._id,
          { $push: { likes: req.user._id } },
          { new: true }
        );
        res.status(200).send(comment);
      } else {
        res.status(400).send({ message: "You can't give more likes" });
      }
    } catch (error) {
      res.status(500).send({ message: "There was an issue in the controller" });
    }
  },
  async removeLike(req, res) {
    try {
      const exist = await Comment.findById(req.params._id);
      if (exist.likes.includes(req.user._id)) {
        const comment = await Comment.findByIdAndUpdate(
          req.params._id,
          { $pull: { likes: req.user._id } },
          { new: true }
        );
        res.status(200).send(comment);
      } else {
        res
          .status(400)
          .send({ message: "You can't remove a like before giving one!" });
      }
    } catch (error) {
      res.status(500).send({ message: "There was an issue in the controller" });
    }
  },
};

module.exports = CommentController;
