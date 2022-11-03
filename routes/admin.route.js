const express = require('express')
const adminRoute = express.Router()

adminRoute.get('/', (req, res) => {
  res.render('admin/home', { title: 'Anime Blog (Administrador)' })
})

adminRoute.get('/', (req, res) => {
  res.render('admin/create-post', { title: 'Anime Blog (Administrador)' })
})

adminRoute.get('/', (req, res) => {
  res.render('admin/list-posts', { title: 'Anime Blog (Administrador)' })
})

module.exports = adminRoute