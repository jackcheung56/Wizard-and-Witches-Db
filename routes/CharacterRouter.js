const { Router } = require('express')
const controller = require('../controllers/CharacterController')
const router = Router()

router.post('/create/character', controller.createCharacter)
router.get('/character/:id', controller.getCharacterById)
router.put('/updatecharacter/:id', controller.updateCharacter)
router.delete('/delete/:id', controller.deleteCharacter)

module.exports = router