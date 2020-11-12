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
    birth: {
        type: String,
        required: true
    },
    ancestry: {
        type: String,
        required: true
    },
    patronus: {
        type: String,
        required: true
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'houses'
    },
    image_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('characters', Character)