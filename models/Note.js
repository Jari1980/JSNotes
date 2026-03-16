//Importing mongoose which enables models and schemas 
//Pure mongodb would not support this
const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Note", NoteSchema);