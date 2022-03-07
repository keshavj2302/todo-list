const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/user/profile');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    }
},{
    timestamps:true
});

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        return cb(null, path.join(__dirname, '..',AVATAR_PATH));
    },
    filename:function(req, file, cb){
        return cb(null, (file.fieldname+"-"+Date.now()));
    }
});

userSchema.statics.uploadedAvatar = multer({storage:storage}).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model('user', userSchema);

module.exports = User;