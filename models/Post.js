const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    reuired: true
  },
  data: {
    data: new Date({
      
    })
  }
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post