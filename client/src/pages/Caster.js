import React, { Component } from 'react'
import { __GetCharacter } from '../services/CharacterService'
import { Link } from 'react-router-dom'
import House from './House'
import Box from '../components/Box'


export default class Caster extends Component {
    constructor() {
        super()
        this.state = {
            character: null
        }
    }

    componentDidMount() {
        this.getCharacter()
        //console.log('mounted')
    }

    getCharacter = async () => {
        try {
            const character = await __GetCharacter(this.props.match.params._id)
            //console.log(character)
            this.setState({character})
        } catch (error){
            console.log(error)
        }
    }

    render () {
        const { character } = this.state
        if (this.state.character) {
            return(
            <div>
                <h2>Name: {character.name}</h2>
                <img src ={character.image_url} alt="hp" />
                <p> Gender: {character.gender} </p>
                <p> Birthday: {character.birth} </p>
                <p> Ancestry: {character.ancestry}</p>
                <p> Patronus: {character.patronus}</p>
            <Box
            key ={character.house._id}
            onClick={() => this.props.history.push(`/house/${character.house._id}`)}>
                <Link component={House}> House: {character.house.name}</Link>
            </Box>
            </div>
            )}
        return <h3>Summoning Wizard/Witch</h3>
    }
}