import express from "express"
import { Home } from "../controllers/home.js"

const router = express.Router()

// HOME
router.get("/", Home)


export default router
