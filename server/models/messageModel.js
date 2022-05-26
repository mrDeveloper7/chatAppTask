const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
})
const Message = new mongoose.model('message', messagesSchema);
module.exports = Message;
