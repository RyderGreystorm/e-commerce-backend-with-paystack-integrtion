const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title:{type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String, requied: true},
    categories:{type: Array},
    size: {type:String, required: true},
    color: {type: String, required: true},
    price: {type:Number, required: true},
},
{timestamps: true},
);

module.exports = mongoose.model("Products", ProductSchema)