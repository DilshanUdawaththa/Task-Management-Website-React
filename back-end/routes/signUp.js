// joi validation
// does user exist?
// create new user
// hash password
// save user

import express from "express";
import Joi from "Joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  // joi validation
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // does user exist?
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists...");

    // create new user
    const { name, email, password } = req.body;
    user = new User({
      name,
      email,
      password,
    });

    if (user) return res.status(200).send("User created");

    // hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // save user
    await user.save();

    // automatically sign in part 
    const jwtSecretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );

    res.send(token);

  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

export default router;
