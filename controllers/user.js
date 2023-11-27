import User from "../models/User.js";
export const getUsers = (req, res) => {
  //  user schema
  res.send("all users route");
};

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.send({ error: err.message });
  }
};
