import express from "express"
import { createPegawai, updatePegawai, deletePegawai, getPegawai, getAllPegawai } from "../controllers/pegawai.js"

const router = express.Router()

// PEGAWAI
router.get("/pegawai/:id", getPegawai)
router.get("/pegawai", getAllPegawai)
router.post("/pegawai", createPegawai)
router.put("/pegawai/:id", updatePegawai)
router.delete("/pegawai/:id", deletePegawai)


export default router
