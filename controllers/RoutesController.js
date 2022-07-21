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
      const routes = await Route.find({});
      res.status(200).send(routes);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Hubo un problema cargando las rutas" });
    }
  },
};

module.exports = RoutesController;
