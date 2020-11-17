import React, { Component } from 'react'
import {__GetHouse} from '../services/HouseService'


export default class House extends Component {
    constructor () {
        super()
        this.state = {
            house: null
        }
    }

    componentDidMount() {
        this.getHouse()
    }

    getHouse = async () =>{
        try {
            const house = await __GetHouse(this.props.match.params.id)
            this.setState({house})
        } catch (error) {
        console.log(error)
    }
}
    render() {
        const { house } = this.state
        if (this.state.house) {
            return (
                <div>
                    <h2>House: {house.name}</h2>
                    <p>Founder: {house.founder}</p>
                    <p>Emblem: {house.emblem}</p>
                    <p>Traits: {house.trait}</p>
                    <img src={house.image_url} alt="houses"/>
                </div>
            )
        }
        return <h3>House Info</h3>
    }
}