const express = require("express");
const router = express.Router();
const RoutesController = require("../controllers/RoutesController");
const { authentication } = require("../middleware/authentication");

router.get("/", RoutesController.getAllRoutes);
router.get("/getById/:id", authentication, RoutesController.getRouteById);
router.get("/pois", RoutesController.getAllPois);
router.get("/getById/pois/:id", RoutesController.getRouteById);

module.exports = router;
