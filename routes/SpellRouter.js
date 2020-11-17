const { Router } = require('express')
const controller = require('../controllers/SpellController')
const router = Router()

router.get('/', controller.getSpell)
router.post('/create', controller.createSpell)

module.exports = router