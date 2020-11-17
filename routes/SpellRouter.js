const { Router } = require('express')
const controller = require('../controllers/SpellController')
const router = Router()

router.get('/', controller.getSpells)
router.get('/casted/:id', controller.getSpell)
router.post('/create', controller.createSpell)
router.put('/update/:id', controller.updateSpell)

module.exports = router