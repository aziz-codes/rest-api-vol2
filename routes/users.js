import express from "express";
import { getUsers, createUser } from "../controllers/user.js";

const router = express.Router();
// this will be route for /users
router.get("/", getUsers);
router.post("/signup", createUser);

export default router;
