import React, { Component } from 'react'
import {__GetCharacters} from '../services/CharacterService'
import Box from '../components/Box'


export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            currentPage: 1
        }
    }

    componentDidMount() {
        this.fetchCharacter()
        //console.log('mounted')
    }

    fetchCharacter = async () => {
        try{
            const characters = await __GetCharacters(this.state.currentPage)
            this.setState({ characters: [...this.state.characters, ...characters] })
            //console.log(characters)
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
                            <Box
                            key = {character._id}
                            onClick={() => this.props.history.push(`/caster/${character._id}`)} 
                            >
                                <div>
                                    <h3>Name: {character.name}</h3>
                                    <img src ={character.image_url} alt="hp" />
                                    <p> Gender: {character.gender} </p>
                                    <p> Birthday: {character.birth} </p>
                                    <p> Ancestry: {character.ancestry}</p>
                                    <p> Patronus: {character.patronus}</p>
                                    <p> House: {character.house.name}</p>
                                        
                                </div>
                                </Box>
                        ))
                    ) : (
                        <h4>No Posts</h4>
                    )}
                    <button onClick={this.nextPage}>More Wizard/Witches</button>
                </section>
            </div>
        )
    }
}