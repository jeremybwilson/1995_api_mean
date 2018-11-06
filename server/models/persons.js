const mongoose = require('mongoose');
    // validator = require('validator')
    // bcrypt = require('bcrypt')
const { Schema } = mongoose;
const saltRounds = 10;

const PersonSchema = new Schema({
    name:{
        type: String, 
        required: [true, 'Please write the name of someone that was born in 1955'], 
        trim: true
    }
}, {timestamps: true});

const Person = mongoose.model('Person', PersonSchema);