const express = require("express")
const njk = require("nunjucks")
const Blog = require("./routes/blog")
const Users = require("./routes/users")
const Auth = require("./routes/auth")

const app = express()

const PORT = 3000

njk.configure("templates", { autoescape: true, express: app })

app.use("/blog", Blog)
app.use("/users", Users)
app.use("/auth/user", Auth)
app.get("/", Blog)
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/templates/login.html")
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server listening on port ${PORT}`)
  }
})
