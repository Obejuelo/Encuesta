const Teacher = require('../models/Teacher');
const xlsxj = require("xlsx-to-json");
const express = require('express');
const path = require('path');

//get teachers
const index = (req, res) => {
	Teacher.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get teacher with _id
const find = (req, res) => {
	Teacher.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Get teacher with _id
const findById = (req, res) => {
	Teacher.findOne({ 'clave': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

const createOne = (req,res) => {
	Teacher.create({
		clave: req.body.clave,
		nombre: req.body.nombre
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})
}

//Post teacher(s)
const create = async (req, res, next) => {
	//send teacher with excel
	let folder = path.resolve(__dirname, '../../assets');
	let file = req.files.file;

	if(!req.files){res.json({message:'no se ha seleccionado el archivo'})}

	try {
		let moveTo = await file.mv('./public/assets/excel/file.xlsx')
		next();
	} catch (error) {
		res.json(error)
	}
}

const converterJson = (req, res) => {
	let url = {
		input: 'public/assets/excel/file.xlsx',
		output: "public/assets/json/output.json"
	}

	xlsxj(url, (err, data) => {
		if(err){console.log(err); res.json(err)}
		res.json(data)
	});
}

//Update teacher
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	Teacher.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete teacher
const destroy = (req, res) => {
	let id = req.params.id;

	Teacher.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'usuario eliminado'
			})
		})
}

module.exports = { 
	create, 
	index, 
	find, 
	update, 
	destroy, 
	findById, 
	converterJson, 
	createOne
}