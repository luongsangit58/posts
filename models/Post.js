const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Tao model
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: new Date().getTime()/1000
  }
})

module.exports = mongoose.model('post', postSchema)
