import React from 'react';

class ClassComponentFive extends React.Component { 
    state = {
        message: "May I come in?"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                message: "Yes, in"
            })
        }, 5000)
    }

    render() {
        return(
            <div style={{marginBottom: 50}}>
                <h2>Class component example five</h2>
                <p>Status: {this.state.message}</p>
            </div>
        )
    }
} 

export default ClassComponentFive;