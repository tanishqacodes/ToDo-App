const mongoose = require('mongoose');
const db = require('../config/db');

// A schema in mongoose is a blueprint that defines the structure and rules for how data should be stored in a MongoDB collection

// The specific part you're using here is the Schema class from the mongoose library.

const { Schema } = mongoose;

const userSchema = new Schema({
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    },
    password:{
        type : String,
        lowercase : true,
    }
});

// user => collection name
const userModel = db.model('user',userSchema);

module.exports = userModel;