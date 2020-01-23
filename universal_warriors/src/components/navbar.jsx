import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import HomePage from "./homepage"

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/characters">Characters</Link>
            </nav>

            <Switch>
                <Route path="/" component  = {HomePage}/>
                <Route path="/characters" />
            </Switch>

        </div>

    )
}

export default NavBar