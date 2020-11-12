const { Router } = require('express')
const controller = require('../controllers/HouseController')
const router = Router()

router.post('/create', controller.createHouse)

module.exports = router