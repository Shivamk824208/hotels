const mongoose = require('mongoose');

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   work:{
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true
   },
   mobile:{
    type: String,
    required: true
   },
   address: {
    type: String
   },
   salary: {
    type: Number,
    required: true
   }

});

//create person model
const person = mongoose.model('person', personSchema);
module.exports = person;