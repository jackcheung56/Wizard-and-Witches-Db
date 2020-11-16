import React, { Component } from 'react'
import {__GetSpells} from '../services/SpellServices'

export default class Spell extends Component {
    constructor(){
        super()
        this.state = {
            spells: '',
            currentPage: 1
        }
    }
    componenetDidMount(){

    }

    getSpells = async () => {
        try{
            const spells = await __GetSpells(this.state.currentPage)
            this.setState({ spells: [...this.state.spells, ...spells]})
        } catch (error) {
            console.log(error)
        }
    }

    nextPage = () =>
    this.setState ((prevstate) => ({ currentPage: prevstate.currentPage + 1}),
    () => this.getSpells()
    )

    render () {
        const { spells } = this.state
        return (
            <div>
                <h2>Spells in Harry Potter</h2>
                <section>
                {spells.length ? (
                    spells.map((spell) => (
                       <div>
                           <h3>{spell.name}</h3>
                           <p>{spell.description}</p>
                       </div>     
                    ))
                ) : (
                    <h3>No Posts</h3>
                )}
                <button onClick={this.nextPage}> More Spells </button>
                </section>
            </div>
        )
    }
}