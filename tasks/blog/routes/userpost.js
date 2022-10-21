const express = require("express")
const Router = express.Router()
const controller = require("../services/blog-controller")

const BlogController = new controller()

class Blog {
  constructor() {
    Router.post("/", this.createPost)
  }

  async createPost(req, res) {
    if (req.session.isAuthenticated) {
      BlogController.addPost(
        req.body.title,
        req.body.text,
        req.body.date,
        req.session.user.name
      )
      res.send({ status: "ok" })
    } else {
      res.redirect("/login")
    }
  }
}

new Blog()

module.exports = Router
