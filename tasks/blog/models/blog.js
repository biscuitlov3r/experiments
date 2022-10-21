const mongoose = require("mongoose")

const Schema = mongoose.Schema

const blogScheme = new Schema({
  title: String,
  text: String,
  date: String,
  name: String,
})
module.exports = mongoose.model("Blog", blogScheme)
