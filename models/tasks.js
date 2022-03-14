// importing the mongoose library
const mongoose = require('mongoose');

// Creating a task schema we have also added a 
// time stamp which will be taking care of 
// updated and created time
const task = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    finished:{
        type: Boolean,
        default:false
    }
},{
    timestamps:true
});

// Implemening the database model
const Task = mongoose.model('task', task);

// Exporting the task schema
module.exports = Task;