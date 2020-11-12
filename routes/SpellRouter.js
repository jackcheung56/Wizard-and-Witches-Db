const { Router } = require('express')
const controller = require('../controllers/SpellController')
const router = Router()

router.post('/create', controller.createSpell)

module.exports = router