const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('user/home', {title: 'Anime Blog'})
})

router.get('/lista', (req, res) => {
  res.render('user/lista', {title: 'Anime Blog - Lista de Animes'})
})

router.get('/genero', (req, res) => {
  res.render('user/generos', {title: 'Anime Blog - Gêneros'})
})

router.get('/novos-episodios', (req, res) => {
  res.render('user/novos-episodios', {title: 'Anime Blog - Novos Episodios'})
})

module.exports = router