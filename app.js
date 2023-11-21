import express from "express";

import bodyParser from "body-parser";

const PORT = 5000;

const app = express();
// middleware to handle http requests..
app.use(bodyParser);

app.listen(PORT, () => console.log("server is running on server : " + PORT));
