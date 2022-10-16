import mongoose from "mongoose";
const { Schema } = mongoose;


const KehadiranSchema = new mongoose.Schema({
	idPegawai: {
		type: String,
		required: true
	},
	hadir: {
		type: String
	},
	izin: {
		type: String
	},
	noIzin: {
		type: String
	},
	cuti: {
		type: String
	},
	noCuti: {
		type: String
	},
	telat: {
		type: String
	},
	description: {
		type: String
	}

})

export default mongoose.model("Kehadiran", KehadiranSchema)
