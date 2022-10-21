const express = require("express")
const Router = express.Router()
const controller = require("../services/blog-controller")

const BlogController = new controller()

class Blog {
  constructor() {
    Router.get("/", this.getAllBlogs)
    Router.get("/users", this.getUsers)
    Router.get("/test", this.addTest)
    Router.get("/:id", this.getIdBlog)
  }

  async getAllBlogs(req, res) {
    BlogController.allBlogs(req, res)
  }

  async getIdBlog(req, res) {
    BlogController.getBlog(req, res)
  }
  async getUsers(req, res) {
    BlogController.getUsers(req, res)
  }
  async addTest(req, res) {
    BlogController.addUser(req, res)
  }
}

new Blog()

module.exports = Router
