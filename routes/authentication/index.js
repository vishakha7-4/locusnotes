const express = require('express');

const router = express.Router();
const homeController = require('../../controllers/home');
const userController = require('../../controllers/user');

router.get('/', homeController.index);
router.get('/login', userController.getLogin)
router.post('/login', userController.postLogin);
router.get('/logout', userController.logout);
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);


module.exports = router;
