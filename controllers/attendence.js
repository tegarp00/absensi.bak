import Attendence from "../models/Attendence.js"

export const createAttendence = async (req, res) => {

	const newAttendence = new Attendence(req.body)
	try {
		const saveAttendence = await newAttendence.save()
		res.status(200).json({
			status: 200,
			message: "Attendence Berhasil disimpan",
			data: saveAttendence
		});
	}catch(error) {
		console.log(error)
	}
}

export const getAttendence = async (req, res) => {
	try {
		const id = req.params.id
		const getAttendence = await Attendence.findOne({idPegawai: id})
		if(!getAttendence) {
			res.status(404).json({
				status: 404,
				message: "ID Pegawai tidak ditemukan"
			})
		}
		res.status(200).json({
			status: 200,
			message: "Berhasil mendapatkan Data Attendence pegawai",
			data: getAttendence
		})

	}catch(error) {
		console.log(error)
	}
}

export const getAllAttendence = async (req, res) => {
	try {
		const allAttendence = await Attendence.find()

		res.status(200).json({
			status: 200,
			message: "Berhasil mendapatkan Data Attendence pegawai",
			data: allAttendence
		})
	}catch(error) {
		console.log(error)
	}
}

export const updateAttendence = async (req, res) => {
	try {
		const id = req.params.id
		const cekId = await Attendence.findOne({idPegawai: id})
		if(!cekId) {
			return res.status(400).json({
				status: 400,
				message: "ID Pegawai tidak ada"
			})
		}

		const objId = cekId._id

		//const { idPegawai, hadir, izin, cuti, description  } = req.body
		const updateAttendence = await Attendence.findByIdAndUpdate(objId, 
			{$set: req.body},
			{new: true}
		)

		//const dataAttendence = await Attendence.findOne({idPegawai: id})
		res.status(200).json({
			status: 200,
			message: "Data Attendence Berhasil diupdate",
			data: updateAttendence
		})

	}catch(error) {
		console.log(error)
	}
}

export const deleteAttendence = async (req, res) => {
	try {
		const id = req.params.id
		const cekId = await Attendence.findOne({idPegawai: id})
		if(!cekId) {
			res.status(400).json({
				status: 400,
				message: "Data attendence tidak ada / sudah dihapus"
			})
		}
		await Attendence.deleteOne({idPegawai: id})
		res.status(200).json({
			staus: 200,
			message: "Data attendence Berhasil dihapus"
		})

	}catch(error) {
		console.log(error)
	}
}
