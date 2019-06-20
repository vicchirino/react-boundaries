import * as React from 'react'
import PropTypes from "prop-types"

export default class ErrorBoundaries extends React.Component {

    static propTypes = {
        children: PropTypes.node,
      }

    constructor(props) {
    super(props)
        this.state = { errorJustHappened: false }
    }
    
    static getDerivedStateFromError() {
        return { errorJustHappened: true }
    }
        
    componentDidCatch(error, info) {
        console.log("This is ErrorBoundary logging an error:")
        console.log(error, info)
    }

    render() {
        const { errorJustHappened } = this.state
        const { children } = this.props

        if (errorJustHappened) {
            return (
                <div className="container">
                    {"Error"}
                </div>
            )
        }
        return children
    }

}
