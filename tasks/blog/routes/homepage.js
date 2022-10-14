const express = require("express")
const Router = express.Router()

class HomePage {
  constructor() {
    Router.get("/", this.getMainPage)
  }

  async getMainPage(req, res) {
    res.send("Main page")
  }
}
new HomePage()

module.exports = Router
