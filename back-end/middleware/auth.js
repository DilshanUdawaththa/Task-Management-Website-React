// function
// does token exist?
// verify the token
// next()

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function auth(req, res, next) {
  // does token exist?
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. Not authorized...");

  try {
    // verify the token
    const jwtSecretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, jwtSecretKey);
    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send("Invalid auth token...");
  }
}

export default auth;
