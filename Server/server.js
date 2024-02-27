require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //request listener
        app.listen(process.env.PORT, () => {
            console.log('Working')
        })
    })
    .catch((error) => {
        console.log(error)
    })
