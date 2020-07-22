import React from 'react'

class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null
        }
    }

    render() {
        return (
            <>
                <h2>
                    { this.props.name ? this.props.name : 'Not yet' }
                </h2>
            </>
        )
    }
}

export default Summary
