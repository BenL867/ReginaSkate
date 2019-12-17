const mongoose = require('mongoose')
 
const PostSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  image: String,
  description: String,
  location: String,
})
 
const Post = mongoose.model('Post', PostSchema)
 
module.exports = post