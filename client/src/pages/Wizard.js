import React, { Component } from 'react'
import {__GetCharacters} from '../services/CharacterService'
//import Box from '../components/Box'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            currentPage: 1
        }
    }

    componenetDidMount() {
        this.fetchCharacter()
    }

    fetchCharacter = async () => {
        try{
            const characters = await __GetCharacters(this.state.currentPage)
            this.setState({ characters: [...this.state.characters, ...characters] })
        } catch (error) {
            console.log(error)
        }
    }

    nextPage = () => this.setState(
        (prevstate) => ({ currentPage: prevstate.currentPage + 1}),
        () => this.fetchCharacter()
    )
    

    render() {
        const { characters } = this.state
        return (
            <div>
               <h2>Wizards/Witches</h2> 
                <section>
                    {characters.length ? (
                        characters.map((character) => (
                                <div>
                                    <h3>{character.name}</h3>
                                    <img src ={character.image_url} alt="hp" />
                                    <p>{character.gender},
                                        {character.birth},
                                        {character.ancestry},
                                        {character.patronus},
                                        {character.house}
                                        </p>
                                </div>
                        ))
                    ) : (
                        <h4>No Posts</h4>
                    )}
                    <button onClick={this.nextPage}>Next Page</button>
                </section>
            </div>
        )
    }
}