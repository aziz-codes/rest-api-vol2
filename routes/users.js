import express from "express";
import { getUsers } from "../controllers/getUsers.js";

const router = express.Router();
// this will be route for /users
router.get("/", getUsers);

export default router;
