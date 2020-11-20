
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Wizard from '../pages/Wizard'
import Spells from '../pages/Spells'
import Casted from '../pages/Casted'
import Caster from '../pages/Caster'
import House from '../pages/House'


class Router extends Component {
    constructor() {
        super()
        this.state = {
            pageLoading: true           
        }
    }

    componentDidMount() {
        this.setState({ pageLoading: false })
    }

    render() {
        return (
            <main>
                {this.state.pageLoading ? (
                    <h2>Page is Loading</h2>
                ) : (
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
                   path='/character'
                   component = {(props) => (
                       <LandingPage>
                           <Wizard {...props}/>
                       </LandingPage>
                   )}
                   />
                   <Route
                   path='/spell'
                   component = {(props) => (
                       <LandingPage>
                           <Spells {...props}/>
                       </LandingPage>
                   )}
                   />
                   <Route
                   path='/casted/:_id'
                   component = {(props) => (
                       <LandingPage>
                           <Casted {...props}/>
                       </LandingPage>
                   )}
                   />
                   <Route
                   path='/caster/:_id'
                   component = {(props) => (
                       <LandingPage>
                           <Caster {...props}/>
                       </LandingPage>
                   )}
                   />
                   <Route
                   path='/house/:_id'
                   component = {(props) => (
                       <LandingPage>
                           <House {...props}/>
                       </LandingPage>
                   )}
                   />
                </Switch> 
                )}
            </main>
        )
    }
}

export default Router