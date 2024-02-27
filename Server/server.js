require('dotenv').config()

const express = require('express')
const recipeRoutes = require('./routes/recipes')

const app = express()

//logging requests
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/recipes', recipeRoutes)

//request listener
app.listen(process.env.PORT, () => {
    console.log('Working')
})