const { Schema, model } = require('mongoose')

const Character = new Schema ({
    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'houses'
    },
    spell: {
        type: Schema.Types.ObjectId,
        ref: 'spells'
    }
}, {
    timestamps: true
})

module.exports = model('characters', Character)