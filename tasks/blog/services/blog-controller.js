const User = require("../models/user")
const Blog = require("../models/blog")

class BlogController {
  constructor() {
    this.notes = [
      {
        title: "Все блоги",
        text: "Тут будут выводиться все блоги",
        date: "1.2.2022",
        name: "111",
      },
      {
        title: "Все блог32и",
        text: "Тут будут выводиться в33се блоги",
        date: "1.2.233022",
        name: "111",
      },
    ]
  }
  async allBlogs(req, res) {
    Blog.find({}, function (err, allBlogs) {
      res.render("index.njk", {
        namepage: "Blog",
        title: "Все блоги",
        description: "Тут будут выводиться все блоги",
        blogs: allBlogs
      })
    }
  }

  async getBlog(req, res) {
    Note.find({}, { projection: { name: req.params.id }, function (err, allNotes) {
      if (err) {
        console.log(err)
        return res.sendStatus(400)
      }
      let notes = []
      for (let i in allNotes) {
        if (req.params.id == allNotes[i].name) {
          notes.push(allNotes[i])
        }
      }
      res.render("blog.njk", { notes: notes })
    })
  }
  async getMyBlog(req, res) {
    Note.find({}, { projection: { name: req.session.user.name }, function (err, allNotes) {
      if (err) {
        console.log(err)
        return res.sendStatus(400)
      }
      let notes = []
      for (let i in allNotes) {
        if (req.params.id == allNotes[i].name) {
          notes.push(allNotes[i])
        }
      }
      res.render("myblog.njk", { notes: notes })
    })
  }
  async addPost(title, text, date, name) {
    let note = new Note({ title: title, text: text, date: date, name: name })
    note.save(function (err) {
      if (err) {
        console.log(err)
      }
      return
    })
  }
  async addTestUser(req, res) {
    let user = new User({ name: "Vasya", login: "vAsYa", password: "123" })
    user.save(function (err) {
      if (err) {
        console.log(err)
      }
      res.send("test user successfully added")
    })
  }
}
module.exports = BlogController
