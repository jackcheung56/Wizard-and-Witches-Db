import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'


function Nav() {
    return (
    <header> 
        <nav className ="nav">
    
                <NavLink activeClassName="nav-active" to ="/">
                    Home
                </NavLink>
                <NavLink activeClassName="nav-active" to ='/character'>
                    Wizard/Witches
                </NavLink>
                <NavLink activeClassName="nav-active" to ='/spell'>
                    Spells
                </NavLink>
        </nav>       
    </header>
    )
}

export default Nav