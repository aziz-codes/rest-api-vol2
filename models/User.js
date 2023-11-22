import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  date: Date.now,
});

const User = mongoose.Model("user", userSchema);

export default User;
