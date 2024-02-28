const express = require('express')
const {
    getRecipe,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController')
const router = express.Router()

//Server request routers
//get all recipes
router.get('/', getRecipe)

//get a recipe
router.get('/:id', getRecipeById)

//post a recipe
router.post('/', createRecipe)

//delete a recipe
router.delete('/:id', deleteRecipe)

//update a recipe
router.patch('/:id', updateRecipe)

module.exports = router