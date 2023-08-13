const mongoose = require("mongoose");

// ToDo => Data base name

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/ToDo").on('open',()=>{
    console.log("MongoDB connected...");
}).on('error',()=>{
    console.log("MongoDb connection error");
});

module.exports = connection;