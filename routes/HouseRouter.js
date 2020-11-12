const { Router } = require('express')
const controller = require('../controllers/HouseController')
const router = Router()

router.post('/create', controller.createHouse)
router.put('/update/:id', controller.updateHouse)

module.exports = router