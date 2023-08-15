const mongoose = require('mongoose');
const bycrpt = require("bcrypt");
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

// before saving the function encrypt the password 
// done before saving into database.

userSchema.pre('save',async function(){
    try {
        var user = this;
        const salt = await(bycrpt.genSalt(10));
        const hash = await bycrpt.hash(user.password,salt);

        user.password = hash;

    } catch (error) {
        throw error;
    }
});


// user => collection name
const userModel = db.model('user',userSchema);

module.exports = userModel;