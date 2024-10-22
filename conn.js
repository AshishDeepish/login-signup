 const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://ashishsingh873:Deepika@cluster6.2khce.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster6").then(()=>{

    console.log("connected")
 })     // database url coonection to server method