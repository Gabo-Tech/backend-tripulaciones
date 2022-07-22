const Route = require("../models/Route");
const User = require("../models/User");
const Rating = require("../models/Rating");

const RatingsController = {
  async create(req, res, next) {
    try {
      const rating = await Rating.create({
        ...req.body,
        userId: req.user._id,
        routeId: req.params._id,
      });
      await Route.findByIdAndUpdate(req.params._id, {
        $push: { ratingId: rating._id },
      });
      await User.findByIdAndUpdate(req.user._id, {
        $push: { ratingId: rating._id },
      });
      res.status(201).send({ message: "Puntuado correctamente!", rating });
    } catch (error) {
      console.error(error);
      error.origin = "score crear";
      next(error);
    }
  },

  async getAll(req, res) {
    try {
      const ratings = await Rating.find();
      res.status(200).send({ ratings });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "No se pudieron conseguir las puntuaciones" });
    }
  },
};

module.exports = RatingsController;
