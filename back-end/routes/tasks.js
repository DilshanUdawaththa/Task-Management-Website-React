import express from "express";
import Joi from "Joi";

import Task from "../models/task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find().sort({ date: 1 });
    res.send(tasks);
    // display logged username
    console.log(req.user.name);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  //this is a joi syntax
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  //this is a joi syntax
  const { error } = schema.validate(req.body);

  //this is a joi syntax
  if (error) return res.status(400).send(error.details[0].message);

  //extracting properties from request.body
  const { name, author, isComplete, date, uid } = req.body;

  //create a document using model
  let task = new Task({
    name,
    author,
    isComplete,
    date,
    uid,
  });

  //saving document to the database
  task = await task.save();
  res.send(task);
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send("Task is not found");

    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.send(deletedTask);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send("Task is not found");

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
      isComplete: !task.isComplete,
    });

    res.send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send("Task is not found");

    const { name, author, isComplete, date, uid } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        name,
        author,
        isComplete,
        date,
        uid,
      },
      { new: true }
    );

    res.send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

export default router;
