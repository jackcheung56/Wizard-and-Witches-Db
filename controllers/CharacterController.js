const Character = require('../models/character')

const createCharacter = async (request, response) => {
    try{
        const character = await new Character(request.body)
        await character.save()
        return response.status(201).json({
            character,
        })
    } catch(error) {
        return response.status(500).json({error: error.message})
    }
}

const getCharacterById = async (request, response) => {
    try {
        const { id } = request.params
        const character = await character.findById(id)
        if (character) {
            return response.status(200).json({character})
        }
        return response.status(404).send('No wizard/witch with this Character ID.')
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const updateCharacter = async (request, response) => {
    try{
        const { id } = request.params
        await Character.findByIdAndUpdate(id, request.body, { new: true}, (error, character) =>{
            if(error) {
                response.status(500).send(error)
            }
            if(!character) {
                response.status(500).send('Wizard/Witch does not exist!')
            }
            return response.status(200).json(character)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const deleteCharacter = async (request, response) => {
    try{
        const { id } = request.params
        const removeCharacter = await Character.findByIdAndDelete(id)
        if (removeCharacter) {
            return response.status(200).send('Wizard/Witch has been expelled!')
        }
        throw new Error ('Wizard/Witch not found')
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    createCharacter,
    getCharacterById,
    updateCharacter,
    deleteCharacter
}