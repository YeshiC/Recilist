const Recipe = require('../schemas/recipeModel')
const mongoose = require('mongoose')

const getRecipe = async (req,res) => {
    const recipe = await Recipe.find({}).sort({createdAt: -1})

    res.status(200).json(recipe)
}

const getRecipeById = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error: 'no such recipe'})
    }

    const recipe = await Recipe.findById(id)

    if (!recipe) {
        return res.status(404).json({error: 'no such recipe'})
    }

    res.status(200).json(recipe)
}

const createRecipe = async (req,res) => {
    const {name, ingredients, instructions} = req.body

    try{
        const recipe = await Recipe.create({name, ingredients, instructions})
        res.status(200).json(recipe)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteRecipe = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error: 'no such recipe'})
    }

    const recipe = await Recipe.findOneAndDelete({_id: id})

    if (!recipe) {
        return res.status(404).json({error: 'no such recipe'})
    }

    res.status(200).json(recipe)
}

const updateRecipe = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error: 'no such recipe'})
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id},{...req.body})
        
    if (!recipe) {
        return res.status(404).json({error: 'no such recipe'})
    }
    
    res.status(200).json(recipe)
}

module.exports = {
    getRecipe,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe
}