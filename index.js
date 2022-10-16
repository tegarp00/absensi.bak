import express from "express"

import dotenv from "dotenv"
import mongoose from "mongoose"
import pegawaiRoute from "./routes/pegawai.js"
import KehadiranRoute from "./routes/attendence.js"
import reportPegawaiRoute from "./routes/laporan.js"
import home from "./routes/home.js"

const app = express()
dotenv.config()

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO)
		console.log("database konek")
	} catch(error) {
		throw error
	}
};

	mongoose.connection.on("disconnect", () => {
	console.log("MongoDB disconnected!")
})

app.use(express.json())


app.use("/", home)
app.use("/api/absensi", pegawaiRoute)
app.use("/api/absensi", KehadiranRoute)
app.use("/api/absensi", reportPegawaiRoute)


app.listen(process.env.PORT, () => {
	connect()
	console.log("Backend konek!")
})
