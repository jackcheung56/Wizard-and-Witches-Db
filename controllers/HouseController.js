const House = require('../models/house')

const createHouse = async (request, response) => {
    try {
        const house = await new House(request.body)
        await house.save()
        return response.status(201).json({
            house,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    createHouse
}