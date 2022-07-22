const express = require("express");
const router = express.Router();
const RatingsController = require("../controllers/RatingsController");
const { authentication } = require("../middleware/authentication");

router.post('/:_id', authentication, RatingsController.create);
router.get('/', authentication, RatingsController.getAll);
router.get('/avgRating/:_id', authentication, RatingsController.averageRating);
module.exports = router;