const { Router } = require('express')
const controller = require('../controllers/SpellController')
const router = Router()

router.post('/create', controller.createSpell)
router.get('/spells', controller.getSpell)

module.exports = router