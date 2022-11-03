// Modulos
const express = require('express')
const expressHbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Constantes
const app = express()
const router = require('./routes/index')
const adminRoute = require('./routes/admin.route')
const PORT = process.env.PORT || 3000

// Configurações
  // Config arquivos estáticos
  app.use(express.static(__dirname + '/public'))

  // Config Mongoose
  mongoose.connect('mongodb://localhost:27017/anime_blog', () => {
    console.log("Conexão efectuada com sucesso!")
  }).catch(err => {
    console.log("A conexão falhou!")
    process.exit(1)
  })

  // Config bodyParser
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  //Config View Engine
  app.engine('hbs', expressHbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layout/'
  }))
  app.set('view engine', 'hbs')

//Rotas
app.use('/', router)
app.use('/admin', adminRoute)

//Outros
app.listen(PORT)