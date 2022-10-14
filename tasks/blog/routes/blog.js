const express = require("express")
const Router = express.Router()
const controller = require("../services/blog-controller")

const BlogController = new controller()

class Blog {
  constructor() {
    Router.get("/", this.getAllBlogs)
    Router.get("/:id", this.getIdBlog)
  }

  async getAllBlogs(req, res) {
    BlogController.allBlogs(req, res)
  }

  async getIdBlog(req, res) {
    BlogController.getBlog(req, res)
  }
}

new Blog()

module.exports = Router
