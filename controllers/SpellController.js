const Spell = require('../models/spell')


const createSpell = async (request, response) => {
    try{
        const spell = await new Spell(request.body)
        await spell.save()
        return response.status(201).json({
            spell,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

const getSpells = async (request, response) => {
    try {
        const { page, limit } = request.query
        const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
        const spells = await Spell.find()
        .limit(parseInt(limit))
        .skip(offset)
        response.send(spells)
    } catch (error)  {
        throw error
    }
}

const getSpell = async (request, response) => {
    try {
        const spell = await Spell.findById(request.params.id)
        response.send(spell)
    } catch (error) {
        throw error
    }
}

const updateSpell = async (request, response) => {
    try{
        const { id } = request.params
        await Spell.findByIdAndUpdate(id, request.body, { new: true}, (error, spell) =>{
            if(error) {
                response.status(500).send(error)
            }
            if(!spell) {
                response.status(500).send('Spell does not exist!')
            }
            return response.status(200).json(spell)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}
module.exports = {
    createSpell,
    getSpells,
    getSpell,
    updateSpell
}