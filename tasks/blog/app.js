const express = require("express")
const session = require("express-session")
const redis = require("redis")
const redisClient = redis.createClient()
const redisStore = require("connect-redis")(session)
const njk = require("nunjucks")
const Blog = require("./routes/blog")
const Users = require("./routes/users")
const Auth = require("./routes/auth")
const MyBlog = require("./routes/myblog")
const mongoose = require("mongoose")

const app = express()

const PORT = 3000

redisClient.on("error", (err) => {
  console.log("Redis error: ", err)
})
app.use(
  session({
    secret: "ThisIsHowYouUseRedisSessionStorage",
    name: "_redisPractice",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new redisStore({
      host: "localhost",
      port: 6379,
      client: redisClient,
      ttl: 86400,
    }),
  })
)

mongoose.connect(
  "mongodb://localhost:27017/userdb",
  {
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err)
    }
  }
)

njk.configure("templates", { autoescape: true, express: app })

app.use("/blog", Blog)
app.use("/users", Users)
app.use("/myblog", MyBlog)
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
