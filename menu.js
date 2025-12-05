const mongoose = require('mongoose');

//define the person Schema
const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'savory'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }
});
const menuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = menuItem;