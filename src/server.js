const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()

const routes = require('./routes')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
},console.log('connected to the database'))

app.listen(3000,()=>{
    console.log('SERVER RUNNING IN PORT 3000')
})




app.use(express.json())
app.use(cors())
app.use(routes)