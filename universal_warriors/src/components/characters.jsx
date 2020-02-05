import React, { Component } from "react"
import { Link, Switch, Route } from "react-router-dom"
import Data from "../files/charData"
import Profile from "./profile"

class Characters extends Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        let data = Data.getAll()
        console.log('post object', data)
        this.setState({
            post: data
        })

    }

    renderLinks = () => {
        const { post } = this.state
        console.log("render links", typeof(post))
        return (
            <ul>
                {
                    post.map((char) => {
                        return (
                            <li key={char.name}>
                                <Link to={`/characters/profile/${char.name}`}>
                                    {char.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    render() {
        console.log(this.state.post)
        return (
            <div>
                <h1>Characters</h1>
                
                <Switch>
                    <Route exact path = "/characters" render = {this.renderLinks}/>
                    <Route path = "/characters/profile/:name" component ={Profile}/>

                </Switch>
            </div>
        )
    }
}

export default Characters