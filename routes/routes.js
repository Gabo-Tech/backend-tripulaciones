const express = require("express");
const router = express.Router();
const RoutesController = require("../controllers/RoutesController");
const { authentication } = require("../middleware/authentication");

router.get("/", RoutesController.getAllRoutes);
router.get("/getById/:id", authentication, RoutesController.getAllRoutes);

module.exports = router;
