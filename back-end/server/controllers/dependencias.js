const dependencias = require('../models').dependencias;
const dependencias2 = require('../models').dependencias;
const empleados = require('../models').empleados;
const cargos = require('../models').cargos;

function create(req, res) {
    var body = req.body;
    dependencias.create(body)
    .then(dependencias => {
        res.status(200).send({dependencias});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio error al guardar el area"});
    })
}

function update(req, res) {
    var id = req.params.id;
    var body = req.body;

    dependencias.findByPk(id)
    .then(dependencia => {
        dependencia.update(body)
        .then(() => {
            res.status(200).send({dependencia});
        })
        .catch(err => {
            res.status(500).send({message:"Ocurrio error al actualziar dependencia"});
        })
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar la dependencia"});
    })
}

function getAllDependencias(req,res) {
    dependencias.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(dependencias => {
        res.status(200).send({dependencias});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar las dependencias"});
    })
}

function getAllDependencias2(req,res) {
    dependencias2.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(dependencias2 => {
        res.status(200).send({dependencias2});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar las dependencias"});
    })
}

function getById(req,res){
    var id = req.params.id;

    dependencias.findByPk(id)
    .then(dependencia=>{
        res.status(200).send({dependencia});
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrio un error al buscar una ddependencias"});
    })
}

function del(req, res) {
    var id = req.params.id;
    var body = req.body;

    dependencias.destroy({ where: {
        id: req.params.id }
      })
    .then(dependencia => {
        res.status(200).send({dependencia});
    })
    .catch(err =>{
        res.status(500).send({message:"Ocurrio error al borrr dependencia"});
    })
}

function getAllCargos(req,res) {
    cargos.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(cargos => {
        res.status(200).send({cargos});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los cargos"});
    })
}

function getAllEmpleados(req,res) {
    empleados.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(empleados => {
        res.status(200).send({empleados});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los emleados"});
    })
}

module.exports = {
    create,
    update,
    getAllDependencias,
    getById,
    del,
    getAllDependencias2,
    getAllEmpleados,
    getAllCargos
}