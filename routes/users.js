const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.create);
router.post('/login',UserController.login);
router.put('/logout', UserController.logout);
router.get('/getAll', UserController.getAll);

module.exports = router;