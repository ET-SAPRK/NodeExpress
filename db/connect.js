const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const connectionString = 'mongodb+srv://samuel:1993@nodeexpresstaskmanager.rfsrjy1.mongodb.net/test'
mongoose.connect(connectionString)
.then(() => console.log('Connected'))
.catch((err) => console.log(err))