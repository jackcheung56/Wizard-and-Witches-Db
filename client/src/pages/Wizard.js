import React, { Component } from 'react'
import {__GetCharacters} from '../services/CharacterService'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
    }

    componenetDidMount() {
        this.fetchCharacter()
    }

    fetchCharacter = async() => {
        const characters = await __GetCharacters()
        this.setState({ characters: characters})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}