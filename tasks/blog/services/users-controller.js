class UsersController {
  constructor() {
    this.users = [
      {
        login: "one",
        name: "111",
        password: "supersecret",
      },
      {
        login: "second",
        name: "222",
        password: "supersecret",
      },
      {
        login: "third",
        name: "333",
        password: "supersecret",
      },
    ]
  }
  async allUsers(req, res) {
    let users = []
    for (let i of this.users) {
      users.push(i.name)
    }
    res.send({ status: "ok", data: users })
  }
  async getUserInfo(req, res) {
    for (let i of this.users) {
      if (i.login == req.body.login) {
        return i
      }
    }
  }
}
module.exports = UsersController
