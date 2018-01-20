import React from 'react'
import { getRepos } from 'utils/github-api'
import RepoListItem from 'scream/repo-list-item';


export default class RepoList extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                {this.props.repos.map((repo) => {
                    return (<RepoListItem repo={repo} key={repo.id} />)
                }
                )}
            </div>
        )
    }
}