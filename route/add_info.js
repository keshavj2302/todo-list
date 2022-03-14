// Importing express
const express = require('express');

// Importing the add controller
const addController = require('../controller/add_controller');

// creating router through express.router
const router = express.Router();


// Routing
router.post('/info', addController.add);

router.get('/task-completed/:id', addController.complete);

// Exporting router
module.exports = router;