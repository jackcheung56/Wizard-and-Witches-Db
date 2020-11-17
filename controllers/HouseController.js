
const { response } = require('express')
const House = require('../models/house')

const getHouse = async (request, response) => {
    try{
        const house = await House.findById(request.params.id)
        response.send(house)
    } catch (error){
        throw error
    }
}

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

const updateHouse = async (request, response) => {
    try{
        const { id } = request.params
        await House.findByIdAndUpdate(id, request.body, {new: true}, (error, house) =>{
            if(error) {
                response.status(500).send(error)
            }
            if(!house) {
                response.status(500).send('House does not exist')
            }
            return response.status(200).json(house)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    getHouse,
    createHouse,
    updateHouse
}