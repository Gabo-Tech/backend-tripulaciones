const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentsController");
const { authentication, isAuthorComment } = require("../middleware/Authentication");

router.post("/:_id", authentication, CommentController.create);
router.get("/", authentication, CommentController.getAll);
router.delete("/id/:_id", authentication, CommentController.delete);
router.put("/id/:_id", authentication, CommentController.update);


module.exports = router;
