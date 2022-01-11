// const { application } = require('express');


// Importing express
const express = require('express');

// creating router through express.router
const router = express.Router();

// Import action from controller file
const homeController = require('../controller/home_controller');

// Routing
router.get('/', homeController.home);


router.use('/user', require('./user'));

// Middleware for creating sub router
router.use('/add', require('./add_info'));

router.use('/delete', require('./delete_info'));

// Exporting router
module.exports = router;