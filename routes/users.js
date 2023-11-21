import express from "express";
import { getUsers, createUser } from "../controllers/getUsers.js";

const router = express.Router();
// this will be route for /users
router.get("/", getUsers);
router.post("/create-user", createUser);

export default router;
