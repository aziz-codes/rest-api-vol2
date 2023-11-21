import express from "express";
import useRoutes from "./routes/users.js";
import bodyParser from "body-parser";

const PORT = 5000;

const app = express();
// middleware to handle http requests..
app.use(bodyParser.json());

app.use("/users", useRoutes);

app.get("/", (_, res) => res.send("helo"));

app.listen(PORT, () => console.log("server is running on server : " + PORT));
