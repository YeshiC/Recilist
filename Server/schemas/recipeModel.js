const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    ingredients:{
        type: [[{
            ingredientName:{
                type: String,
                required: true
            },
            ingredientAmount:{
                type: Number,
                required: true
            },
            unit:{
                type:String,
                required: true
            },
            _id: false
        }]],
        required: true
    },
    instructions:{
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Recipe', recipeSchema)