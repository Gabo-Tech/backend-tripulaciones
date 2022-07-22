const express = require("express");
const router = express.Router();
const RoutesController = require("../controllers/RoutesController");
const { authentication } = require("../middleware/authentication");

router.get("/", RoutesController.getAllRoutes);
router.get("/getById/:id", authentication, RoutesController.getRouteById);
router.get("/pois", authentication, RoutesController.getAllPois);
router.get("/getById/pois/:id", authentication, RoutesController.getRouteById);
router.get("/getAlldb", authentication, RoutesController.getAll);
router.get("/getByIddb/:_id", authentication, RoutesController.getById);

module.exports = router;
