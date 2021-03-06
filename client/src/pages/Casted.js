import React, { Component } from 'react'
import { __GetSpell } from '../services/SpellServices'

export default class Casted extends Component {
    constructor () {
        super()
        this.state = {
            spell: null
        }
    }

    componentDidMount() {
        this.getSpell()
        //console.log('mounted')
    }

    getSpell = async () => {
        try{
            const spell = await __GetSpell(this.props.match.params._id)
            //console.log(spell)
            this.setState({ spell })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { spell } = this.state
        if (this.state.spell) {
            return (
                <div>
                    <h2>Spell: {spell.name}</h2>
                    <p>Description: {spell.description}</p>
                    <img src={spell.image_url} alt= "accio"/>
                </div>
            )
        }
        return <h3>Casting</h3>
    }
}