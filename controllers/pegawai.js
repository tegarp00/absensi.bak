import Pegawai from "../models/Pegawai.js"

export const createPegawai = async (req, res) => {

	const newPegawai = new Pegawai(req.body)
	try {
		const savePegawai = await newPegawai.save()
		res.status(200).json({
			status: 200,
			message: "Berhasil menambahkan data pegawai",
			data: savePegawai 
		});
	}catch(error) {
		console.log(error)
	}
}

export const updatePegawai = async (req, res) => {
	try {
		/**
		const updatedPegawai = await Pegawai.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		)
		res.status(200).json({
			status: 200,
			message: "Data pegawai Berhasil diperbaharui",
			data: updatedPegawai
		}) */

		const id = req.params.id
		const cekId = await Pegawai.findOne({idCard: id})
		if(!cekId) {
			return res.status(400).json({
				status: 400,
				message: "ID Card pegawai tidak ada"
			})
		}

		const { name, idCard, job, role } = req.body
		const objId = cekId._id

		const updatedPegawai = await Pegawai.findByIdAndUpdate(objId, {$set: req.body}, {new: true})

		//const dataPegawai = await Pegawai.findOne({idCard: idCard})

		res.status(200).json({
			status: 200,
			message: "Data pegawai Berhasil diperbaharui",
			data: updatedPegawai
		})

	}catch(error){
		console.log(error)
	}
}


export const deletePegawai = async (req, res) => {
	try {
		const idCard = req.params.id
		const cekId = await Pegawai.findOne({idCard: idCard})
		if(!cekId) {
			res.status(400).json({
				status: 400,
				message: "Data mungkin tidak ada / sudah dihapus"
			})
		}

		//await Pegawai.findByIdAndDelete(req.params.id)
		await Pegawai.deleteOne({idCard: idCard})
		res.status(200).json({
			status: 200,
			message: "Data pegawai Berhasil dihapus"
		})
	}catch(error) {
		console.log(error)
	}
}

export const getPegawai = async (req, res) => {
	try {
		const idCard = req.params.id
		const getPegawai = await Pegawai.findOne({idCard: idCard})

		if(!getPegawai) {
			res.status(404).json({
				status: 404,
				message: "ID Card tidak ditemukan"
			})
		}
		res.status(200).json({
			status: 200,
			message: "Berhasil mendapatkan Data pegawai",
			data: getPegawai
		})
	}catch(error) {
		console.log(error)
	}
}


export const getAllPegawai = async (req, res) => {
	try {
		const allPegawai = await Pegawai.find();

		if(allPegawai.length === 0) {
			res.status(404).json({
				status: 404,
				message: "Data pegawai masih kosong"
			})
		}

		res.status(200).json({
			status: 200,
			message: "Berhasil mendapatkan Data-data Pegawai",
			data: allPegawai
		})
	}catch(error) {
		console.log(error)
	}
}
