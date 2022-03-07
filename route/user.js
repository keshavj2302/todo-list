const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user_controller');
const homeController = require('../controller/home_controller');

router.get('/signup', userController.signUp);

router.get('/signin', userController.signIn);

router.post('/create', userController.create);

router.post('/uploaded-avatar', passport.checkAuthentication, homeController.avatar);

router.post('/destroy-session', passport.checkAuthentication, userController.destroySession);

router.post('/create-session', passport.authenticate('local', {
    failureRedirect:'/user/signin'
}) , userController.createSession);

module.exports = router;