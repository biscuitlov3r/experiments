const express = require("express")
const Router = express.Router()
const controller = require("../services/blog-controller")

const BlogController = new controller()

class Blog {
  constructor() {
    Router.get("/", this.getMyBlog)
  }

  async getMyBlog(req, res) {
    if (req.session.isAuthenticated) {
      BlogController.getMyBlog(req, res)
    } else {
      res.redirect("/login")
    }
  }
}

new Blog()

module.exports = Router
