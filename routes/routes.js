const express = require("express");
const router = express.Router();
const RoutesController = require("../controllers/RoutesController");
const { authentication } = require("../middleware/authentication");

router.get("/", authentication, RoutesController.getAllRoutes)

module.exports = router;