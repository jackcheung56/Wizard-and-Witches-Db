
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
                   path='/spells'
                   component = {(props) => (
                       <LandingPage>
                           <Spells {...props}/>
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