import User from "../models/User.js";
export const getUsers = async (_, res) => {
  try {
    // Fetch all users from the database
    const allUsers = await User.find();

    // Respond with the list of users
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
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
