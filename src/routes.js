const express = require('express')
const routes = express.Router()
const instructors = require('./app/controllers/instructors')//vindo a funcao instructors
const members = require('./app/controllers/members')//vindo a funcao members


// HTTP VERBS
// GET: Receber RESOURCE
// POST: Criar um Novo RESOURCE com dados enviados
// PUT: Atualizar RESOURCE
// DELETE: Deletar RESOURCE


// INSTRUCTORS
routes.get('/', function(req, res){
    return res.redirect('/instructors')
})
routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit)
routes.post('/instructors', instructors.post)//funcao instructors
routes.put('/instructors', instructors.put)
routes.delete('/instructors', instructors.delete)



// MEMBERS
routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)
routes.post('/members', members.post)//funcao members
routes.put('/members', members.put)
routes.delete('/members', members.delete)


module.exports = routes