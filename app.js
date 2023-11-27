import express from "express";
import useRoutes from "./routes/users.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
const PORT = 5000;

const app = express();
// middleware to handle http requests..
app.use(bodyParser.json());
dotenv.config();
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use("/users", useRoutes);

app.get("/", (_, res) => res.send("helo"));

app.listen(PORT, () => console.log("server is running on server : " + PORT));
