const User = require('../models/User')

const usuario = new User({
  nome: 'Helder',
  sobrenome: 'Cambuta',
  email: 'heldercambuta44@gmail.com'
})

usuario.save((err) => {
  if (err) console.log(err)
})