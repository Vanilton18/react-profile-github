import React from 'react'
import { RepoList } from 'scream/repo-list'

export default class RepoListItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
             <div className="col-sm-3" style={{ marginTop: 10, borderRadius: 30, padding: 10, border: '2px solid rgb(1, 79, 199)' }}>
                    <span>{this.props.repo.name}</span>
                    <hr></hr>
                    <a href={this.props.repo.url} target="_blank" className="btn btn-primary">Go API URL</a>
                    <a href={this.props.repo.html_url} target="_blank" className="btn btn-primary">Go Repo</a>        
                    <br></br>        
            </div>
        )
    }

}