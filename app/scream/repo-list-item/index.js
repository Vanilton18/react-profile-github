import React from 'react'
import { RepoList } from 'scream/repo-list'

export default class RepoListItem extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return ( 
        <div>
            {this.props.repo.name}
        </div>
        )
    }

}