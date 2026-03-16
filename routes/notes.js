const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//Get all Notes
router.get("/", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
})

//Get Note by id
router.get("/:id", async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
})

//Create Note
router.post("/", async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json(note);
})

//Delete Note
router.delete("/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted"});
})

module.exports = router;