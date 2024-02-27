const express = require('express')
const Recipe = require('../schemas/recipeModel')
const router = express.Router()

//Server request routers
//get all recipes
router.get('/', (req,res) => {
    res.json({mssg:'get all recipes'})
})

//get a recipe
router.get('/:id', (req,res) => {
    res.json({mssg:'get single recipes'})
})

//post a recipe
router.post('/', async (req,res) => {
    const {name, ingredients, instructions} = req.body

    try{
        const recipe = await Recipe.create({name, ingredients, instructions})
        res.status(200).json(recipe)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
})

//delete a recipe
router.delete('/:id', (req,res) => {
    res.json({mssg:'delete single recipes'})
})

//update a recipe
router.patch('/:id', (req,res) => {
    res.json({mssg:'update single recipes'})
})

module.exports = router