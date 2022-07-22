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
      error.origin = "Rating";
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
  async averageRating(req, res) {
    try {
      const allRatings = await Rating.find();
      let sum = 0;
      let counter = 0;
      const averageRating = allRatings.map((rate) => {
        if (rate.routeId.toString().includes(req.params._id)) {
          sum = sum + rate.rating;
          counter++;
        }
        return sum / counter;
      });
      let lastItem = averageRating[averageRating.length - 1];
      res.status(200).send({ lastItem });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = RatingsController;
