const { Router } = require('express')
const controller = require('../controllers/CharacterController')
const router = Router()

router.get('/', controller.getCharacters)
router.post('/create', controller.createCharacter)
router.get('/:id', controller.getCharacterById)
router.put('/update/:id', controller.updateCharacter)
router.delete('/delete/:id', controller.deleteCharacter)

module.exports = router