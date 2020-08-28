const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes') //importa rotas
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true}))//responsavel por fazer funcionar o req body
server.use(express.static('public')) //arrumando a pasta public 
server.use(methodOverride('_method'))
server.use(routes) //usa rota

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
}) //config da template engine



server.listen(5000, function(){
    console.log('server is running')
}) //servidor online