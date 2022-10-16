import express from "express"
import { getLaporan, getAllLaporan } from "../controllers/laporan.js"

const router = express.Router()

// LAPORAN
router.get("/laporan/:id", getLaporan)
router.get("/laporan", getAllLaporan)


export default router
