const express = require('express')
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
router.post('/', (req,res) => {
    res.json({mssg:'post single recipes'})
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