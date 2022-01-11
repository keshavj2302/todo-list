
// importing express
const express = require('express');

// creating router
const router = express.Router();

// Importing action delete 
const deleteController = require('../controller/delete_controller');

// Routing url with the delete action
router.post('/info', deleteController.delete);

// Exporting this router
module.exports = router;