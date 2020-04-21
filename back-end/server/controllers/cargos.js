const cargos = require('../models').cargos;
const cargos2 = require('../models').cargos;
const empleados = require('../models').empleados;
const dependencias = require('../models').dependencias;

function create(req, res) {
    var body = req.body;
    cargos.create(body)
    .then(cargos => {
        res.status(200).send({cargos});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio error al guardar el cargo"});
    })
}

function update(req, res) {
    var id = req.params.id;
    var body = req.body;

    cargos.findByPk(id)
    .then(cargo => {
        cargo.update(body)
        .then(() => {
            res.status(200).send({cargo});
        })
        .catch(err => {
            res.status(500).send({message:"Ocurrio error al actualziar cargo"});
        })
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar el cargo"});
    })
}

function del(req, res) {
    var id = req.params.id;
    var body = req.body;

    cargos.destroy({ where: {
        id: req.params.id }
      })
    .then(cargo => {
        res.status(200).send({cargo});
    })
    .catch(err =>{
        res.status(500).send({message:"Ocurrio error al borrar cargo"});
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

function getById(req,res){
    var id = req.params.id;

    cargos.findByPk(id)
    .then(cargo=>{
        res.status(200).send({cargo});
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrio un error al buscar un cargo"});
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
function getAllDependencias(req, res) {
    dependencias.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(dependencias => {
        res.status(200).send({dependencias});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los dependencias"});
    })
}

function getAllCargos2(req,res) {
    cargos2.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(cargos2 => {
        res.status(200).send({cargos2});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los cargos"});
    })
}

module.exports = {
    create,
    update,
    getAllCargos,
    getById,
    del,
    getAllEmpleados,
    getAllCargos2,
    getAllDependencias
}