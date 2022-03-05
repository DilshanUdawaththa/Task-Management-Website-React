import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxheight: 30 },
  email: { type: String, required: true, minlength: 3, maxheight: 200, unique:true },
  password: { type: String, required: true, minlength: 6, maxheight: 1024},
});

const User = mongoose.model("User", userSchema);

export default User;
