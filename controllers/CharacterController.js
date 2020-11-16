const Character = require('../models/character')

const getCharacters = async (request, response) => {
    const { page, limit } = request.query
    const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
    const characters = await Character.find().populate({
        path: 'house',
        model: 'houses',
        select: '_id name'
    })
    .limit(parseInt(limit))
    .skip(offset)
    response.send({ results: characters.length, characters})
}

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
    const character = await Character.findById(request.params.id).populate(
        {
            path: 'house',
            model: 'houses',
            select: '_id name'
        }
    )
    console.log(character)
    response.send(character)
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
    getCharacters,
    createCharacter,
    getCharacterById,
    updateCharacter,
    deleteCharacter
}