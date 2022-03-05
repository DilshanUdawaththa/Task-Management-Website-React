import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import tasks from "./routes/tasks.js";
import signUp from "./routes/signUp.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasks);
app.use("/api/signup", signUp);

//create an end point
app.get("/", (req, res) => {
  res.send("Welcome to our task management API");
});

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.log("MongoDB connection failed...", error.message));
