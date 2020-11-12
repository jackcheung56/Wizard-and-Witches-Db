 const Router = require('express').Router()

const CharacterRoute = require('./CharacterRouter')
const HouseRoute = require('./HouseRouter')
const SpellRoute= require('./SpellRouter')

Router.use('/character', CharacterRoute)
Router.use('/house', HouseRoute)
Router.use('/spell', SpellRoute)

module.exports = Router