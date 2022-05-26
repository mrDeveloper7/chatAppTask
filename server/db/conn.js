const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ChatDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected Successfully");
}).catch((e)=>{
    console.log("No Connection with DB");
})