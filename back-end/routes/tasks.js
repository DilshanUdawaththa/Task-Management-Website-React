import express from "express";

import Task from "../models/task.js";

const router = express.Router();


router.post("/", async(req, res) => {
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

  //handling errors
  try {
    //saving document to the database
    task = await task.save();
    res.send(task);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

export default router;
// module.exports = router;
