const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userScheme = new Schema({
  name: String,
  login: String,
  password: String,
})
module.exports = mongoose.model("User", userScheme)
