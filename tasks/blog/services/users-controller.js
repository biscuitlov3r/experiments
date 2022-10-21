const User = require("../models/user")

class UsersController {
  constructor() {}
  async allUsers(req, res) {
    User.find({}, function (err, allUsers) {
      if (err) {
        console.log(err)
        return res.sendStatus(400)
      }
      res.send(allUsers)
    })
  }
  async getUserInfo(req, res) {
    User.findOne({}, { projection: { name: req.session.user.name }, function (err, user) {
      return user
    })
  }
}
module.exports = UsersController
