
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Wizard from '../pages/Wizard'
import Spells from '../pages/Spells'

class Router extends Component {
    constructor() {
        super()
        this.state = {
            
           
        }
    }

    // componentDidMount() {
    //     this.setState({ pageLoading: false })
    // }
    render() {
        return (
            <main>
               <Switch>
                   <Route
                   exact
                   path='/'
                   component = {() => (
                       <LandingPage>
                           <Home />
                       </LandingPage>
                   )}
                   />
                   <Route
                   exact
                   path='/character'
                   component = {() => (
                       <LandingPage>
                           <Wizard />
                       </LandingPage>
                   )}
                   />
                   <Route
                   exact
                   path='/spells'
                   component = {() => (
                       <LandingPage>
                           <Spells />
                       </LandingPage>
                   )}
                   />
                </Switch> 
            </main>
        )
    }
}

export default Router