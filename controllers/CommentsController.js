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
};

module.exports = CommentController;
