const express = require("express");
const app = express();
require("./db/conn");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const Message = require("./models/messageModel");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// mongoose.connect("mongodb://localhost:27017/portfolioDB", {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("DB Connected Successfully");
// }).catch((e)=>{
//     console.log("No Connection with DB");
// })

//User API's
app.post("/createUser", (req,res)=>{
    const user = new User(req.body);
    user.save().then(()=>{
        res.status(201).send("User Created Successfully.")
    }).catch((e)=>{
        res.status(400).send(e);
    })
})
app.get("/getUsers", (req, res) => {
    User.find({}, (err,result) => {
        if (err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

//Messages API's
app.post("/sendMessage", (req,res)=>{
    const message = new Message(req.body);
    message.save().then(()=>{
        res.send("Message Sent.")
    }).catch((e)=>{
        res.send(e);
    })
})
// app.get("/getMessage", (req, res) => {
//     Message.find({}, (err,result) => {
//         if (err){
//             res.json(err);
//         }
//         else {
//             res.json(result);
//         }
//     })
// })

app.listen(PORT, ()=>{
    console.log(`Backend Server is running on Port ${PORT}`);
})

