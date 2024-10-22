const express = require("express");

const app = express();
const booksRoutes = require("./routes/booksRoutes");
require("./connection/conn");       //databaseconnection
 const user = require("./routes/userRoutes")
const cors = require("cors")
//  app.use("/api/V1", booksRoutes)
app.use(cors({
    origin:"http://localhost:1000/api/signup",
    methods:["GET","POST","HEAD","PUT","PATCH","UPDATE","DELETE"],
    credentials:true,
    allowedHeaders:['Content-Type','Authorization'],
}))

app.get("/", (req, res) => {
  res.send("hello")

})
// app.use(cors())


app.use(express.json())

app.use("/api/v1", booksRoutes)                 // bookes routes
 app.use("/api", user)                     // user routes

/*
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)


app.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

app.post("/register", (req, res)=> {
  const { name, email, password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              name,
              email,
              password
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
}) 

*/




app.listen(1000, function () {
  console.log("server has been started")

})