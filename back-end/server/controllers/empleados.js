const empleados = require('../models').empleados;
const empleados2 = require('../models').empleados;

function create(req, res) {
    var body = req.body;
    empleados.create(body)
    .then(empleados => {
        res.status(200).send({empleados});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio error al guardar el empleado"});
    })
}

function update(req,res){
    var id=req.params.id;
    var body=req.body;

    empleados.findByPk(id)
    .then(empleado=>{
        empleado.update(body)
        .then(()=>{
            res.status(200).send({empleado});
        })
        .catch(err=>{
            res.status(500).send({message:"ocurrio un eror al actualizar empleado"});
        })
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrio un error al buscar la empleado"});
    });
}

function getAll(req,res) {
    empleados.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(empleados => {
        res.status(200).send({empleados});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los empleados"});
    })
}

function getById(req,res){
    var id = req.params.id;

    empleados.findByPk(id)
    .then(empleado=>{
        res.status(200).send({empleado});
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrio un error al buscar una empleados"});
    })
}

function del(req, res) {
    var id = req.params.id;
    var body = req.body;

    empleados.destroy({ where: {
        id: req.params.id }
      })
    .then(empleado => {
        res.status(200).send({empleado});
    })
    .catch(err =>{
        res.status(500).send({message:"Ocurrio error al borrar empleado"});
    })
}

function getAll2(req,res) {
    empleados2.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(empleados2 => {
        res.status(200).send({empleados2});
    })
    .catch(err => {
        res.status(500).send({message:"Ocurrio un error al buscar los empleados"});
    })
}

module.exports = {
    create,
    update,
    getAll,
    getById,
    del,
    getAll2
}