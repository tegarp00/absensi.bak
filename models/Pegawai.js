import mongoose from "mongoose";
const { Schema } = mongoose;


const PegawaiSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	idCard: {
		type: String,
		required: true
	},
	job: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	}
})

export default mongoose.model("Pegawai", PegawaiSchema)
