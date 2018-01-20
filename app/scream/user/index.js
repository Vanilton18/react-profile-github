import React from 'react'
import { getRepos } from 'utils/github-api'
import RepoList from 'scream/repo-list';

export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
        console.log("Construtor!")
    }

    componentWillMount() {
        console.log("componentWillMount!!");
    }

    componentDidMount() {
        const { username } = this.props.params
        getRepos(username).then((repos) => {
            this.setState({
                repos
            })
        })

    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate!!")
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate!!!")
        return true;
    }

    render() {
        return (
            <div>
                <h5>Repositories of {this.props.params.username}</h5>
                <RepoList repos={this.state.repos} />
            </div>
        )
    }
}