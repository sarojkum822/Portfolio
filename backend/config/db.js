const mongoose = require('mongoose');
require('dotenv').config();




const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/github");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongoDB;
