import React, { Component } from 'react';

export default class MyError extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            errorCount: 0
        }
    }
    
    render() {
        const { errorCount } = this.state
        if (errorCount > 0) {
            console.log("HOLA")
            errorCount.func()
        }
        return (
            <div>
                <button onClick={this.handleClick} >
                    Error
                </button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({ errorCount: 1 })
    }
}