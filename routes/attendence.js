import express from "express"
import { createAttendence, getAllAttendence, updateAttendence, getAttendence, deleteAttendence } from "../controllers/attendence.js"

const router = express.Router()

// ATTENDENCE
router.post("/attendence", createAttendence)
router.get("/attendence", getAllAttendence)
router.get("/attendence/:id", getAttendence)
router.put("/attendence/:id", updateAttendence)
router.delete("/attendence/:id", deleteAttendence)


export default router
