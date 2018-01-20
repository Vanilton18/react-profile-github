import React from 'react'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(this.inputRef.value)
        console.log(this.state.username);
        this.props.history.push(`/${this.state.username}`)
    }

    renderResult () {
        return this.state.username === 'vanilton' ? (<span>acertou safadenho!</span>) : null
    }

    render() {
        const callback = () => {
            return console.log(this.state);
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="row text-center">
                        <div className="form-group">
                            <label htmlFor="username" >GitHub Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder="Type Username"
                                ref={ (ref) => {
                                    this.inputRef = ref
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Go!</button>
                    </div>
                    { this.renderResult() }
                </form>
            </div>
        )
    }
}
