const express = require("express")
const bodyparser = require("body-parser")
const Router = express.Router()
const controller = require("../services/users-controller")

const UsersController = new controller()
Router.use(bodyparser.urlencoded({ extended: false }))
Router.use(bodyparser.json())

class Blog {
  constructor() {
    Router.post("/", this.getUser)
  }
  async getUser(req, res) {
    let user = await UsersController.getUserInfo(req, res)
    if (req.body.password != user.password) {
      res.send({ status: "error", message: "Wrong password." })
    } else {
      req.session.isAuthenticated = true
      req.session.user = user
      res.send({ status: "ok", data: { name: user.name } })
    }
  }
}

new Blog()

module.exports = Router
