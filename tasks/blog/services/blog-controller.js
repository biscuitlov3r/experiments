class BlogController {
  constructor() {
    this.blogs = [
      {
        title: "Все блоги",
        text: "Тут будут выводиться все блоги",
        date: "1.2.2022",
        name: "111",
      },
      {
        title: "Все блоги2",
        text: "Тут будут выводиться все блоги2",
        date: "1.2.2023",
        name: "222",
      },
      {
        title: "Все блоги3",
        text: "Тут будут выводиться все блоги3",
        date: "1.2.2024",
        name: "333",
      },
    ]
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
    res.render("index.njk", {
      namepage: "Blog",
      title: "Все блоги",
      description: "Тут будут выводиться все блоги",
      blogs: this.blogs,
    })
  }

  async getBlog(req, res) {
    let notes = []
    for (let i in this.notes) {
      if (req.params.id == this.notes[i].name) {
        notes.push(this.notes[i])
      }
    }
    res.render("blog.njk", { notes: notes })
  }
}
module.exports = BlogController
