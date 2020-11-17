import React from 'react'
import Nav from '../components/Nav'

function LandingPage(props) {
    return(
        <section>
            <Nav />
            {props.children}
        </section>
    )
}

export default LandingPage