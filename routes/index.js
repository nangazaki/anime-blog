const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {title: 'Anime Blog'})
})

router.get('/lista', (req, res) => {
  res.render('home', {title: 'Anime Blog'})
})

router.get('/genero', (req, res) => {
  res.render('home', {title: 'Anime Blog'})
})

router.get('/novos-episodios', (req, res) => {
  res.render('home', {title: 'Anime Blog'})
})

module.exports = router