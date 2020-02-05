import React, { Component } from "react"
import Data from "../files/charData"

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        let postId = this.props.match.params.name;
        console.log(postId)
        let data = Data.getOne(postId)
        this.setState({
            post: data
        })


    }


    render() {
        // console.log("profile page", this.state.post)
        let { post } = this.state

        return (
            <div>
                <h1>Profile</h1>
                <p>{post.name}</p>
                <p>{post.bio}</p>
            </div >
        )
    }
}


export default Profile