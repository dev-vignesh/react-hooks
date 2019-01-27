import React from 'react';

class ClassComponentTwo extends React.Component {
    state = {
        count: 0,
        activeUser: 'Chris'
    }

    setCount = () => {
        this.setState({count: this.state.count + 1});
    }

    changeUser = () => {
        this.setState({activeUser: 'Robbie'});
    }

    render() {
        return(
            <div style={{marginBottom: 50}}>
                <h2>
                    Class component example two
                </h2>
                <p>{this.state.count}</p>
                <button onClick={this.setCount}>Count Up To The Space</button>

                <p>Active user is: {this.state.activeUser}</p>
                <button onClick={this.changeUser}>Change User</button>
            </div>
        )
    }
}

export default ClassComponentTwo;