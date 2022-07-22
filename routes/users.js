const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication } = require("../middleware/Authentication");

router.post('/', UserController.create);
router.post('/login',UserController.login);
router.put('/logout', authentication, UserController.logout);
router.get('/getAll', authentication, UserController.getAll);

module.exports = router;