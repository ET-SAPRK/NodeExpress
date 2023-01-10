require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const connectionString = process.env.MONGO_URL
mongoose.connect(connectionString)
.then(() => console.log('Connected'))
.catch((err) => console.log(err))