import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
    return (
    <header> 
        <nav className ="navbar">
    
                <NavLink to ="/">
                    Home
                </NavLink>
                <NavLink to ='/character'>
                    Wizard/Witches
                </NavLink>
                <NavLink to ='/spells'>
                    Spells
                </NavLink>
        </nav>       
    </header>
    )
}

export default Nav