const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    details:{
        type:String,
        required:true
    },
    github: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;
