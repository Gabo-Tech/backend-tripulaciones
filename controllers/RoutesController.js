const axios = require("axios");
const Route = require("../models/Route");
const mongoose = require("mongoose");
const db = mongoose.connection;

const RoutesController = {
  async getAllRoutes(req, res) {
    try {
      const result = await axios(
        "https://api-routes-data.herokuapp.com/getRoutes/"
      );
      await db.dropCollection("routes");
      const RoutesCollection = await Route.create(...result.data);
      res.status(201).send([RoutesCollection]);
    } catch (error) {
      console.error(error);
      res.send({ message: "Hubo un problema obteniendo las rutas" });
    }
  },
  async getRouteById(req, res) {
    try {
      const result = await axios(
        `https://api-routes-data.herokuapp.com/getRouteById/?id=${req.params.id}`
      );
      res.status(201).send([result.data]);
    } catch (error) {
      console.error(error);
      res.send({ message: "Hubo un problema obteniendo la ruta" });
    }
  },
  async getAllPois(req, res) {
    try {
      const result = await axios(
        "https://api-routes-data.herokuapp.com/getPoi/"
      );
      res.status(201).send([result.data]);
    } catch (error) {
      console.error(error);
      res.send({ message: "Hubo un problema obteniendo los pois" });
    }
  },
  async getPoiById(req, res) {
    try {
      const result = await axios(
        `https://api-routes-data.herokuapp.com/getPoiById/?id=${req.params.id}`
      );
      res.status(201).send([result.data]);
    } catch (error) {
      console.error(error);
      res.send({ message: "Hubo un problema obteniendo el poi" });
    }
  },
  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const routes = await Route.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
      res.send(routes);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Hubo un problema cargando las rutas" });
    }
  },
  async getById(req, res) {
    try {
      const route = await Route.findById(req.params._id)
      .populate({
        path:"commentsId",
        populate: {
          path: "userId"
        }
      })
      res.send(route)
    } catch (error) {
      console.error(error);
      res.status(500).send(
        { message: 'Ha habido un problema al cargar la ruta' }
      )
    }
  },
};

module.exports = RoutesController;
