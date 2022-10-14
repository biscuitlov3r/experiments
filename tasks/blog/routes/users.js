const express = require("express")
const Router = express.Router()
const controller = require("../services/users-controller")

const UsersController = new controller()

class Blog {
  constructor() {
    Router.get("/", this.getAllUsers)
  }

  async getAllUsers(req, res) {
    UsersController.allUsers(req, res)
  }
}

new Blog()

module.exports = Router
