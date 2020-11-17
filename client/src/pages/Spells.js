import React, { Component } from 'react'
import {__GetSpells} from '../services/SpellServices'
import Box from '../components/Box'


export default class Spell extends Component {
    constructor(){
        super()
        this.state = {
            spells: [],
            currentPage: 1
        }
    }

    componentDidMount(){
        this.getSpells()
        //console.log('mounted')
    }
    
    getSpells = async () => {
        try{
            const spells = await __GetSpells(this.state.currentPage)
            this.setState({ spells: [...this.state.spells, ...spells]})
            console.log(spells)
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
                        <Box
                        key={spell._id}
                        onClick={() => this.props.history.push(`/casted/${spell._id}`)}>
                       <div>
                           <h3>Spell: {spell.name}</h3>
                           <p>Description: {spell.description}</p>
                       </div>
                       </Box>     
                    ))
                ) : (
                    <h3>No Posts</h3>
                )}
                <button onClick={this.nextPage}>More Spells</button>
                </section>
            </div>
        )
    }
}