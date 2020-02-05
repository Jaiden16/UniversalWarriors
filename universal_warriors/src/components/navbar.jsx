import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import HomePage from "./homepage"
import Characters from "./characters"

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/characters">Characters</Link>
            </nav>

            <Switch>
                <Route exact path="/" component  = {HomePage}/>
                <Route path="/characters" component = {Characters} />
            </Switch>

        </div>

    )
}

export default NavBar