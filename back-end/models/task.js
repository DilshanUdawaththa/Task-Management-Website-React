import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxheight: 200 },
  author: String,
  uid: String,
  isComplete: Boolean,
  date: { type: Date, default: new Date() },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
