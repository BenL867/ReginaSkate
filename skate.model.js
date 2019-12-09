const mongoose = require('mongoose')

const skateSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: image,
    location: String,
    description: String,
    
})

module.exports = mongoose.model('skateModel', skateSchema)