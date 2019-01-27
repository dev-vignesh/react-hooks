import React from 'react';

class ClassComponentThree extends React.Component {

    componentDidMount() {
        document.title = 'Hello World';
    }   

    render() {
        return (
            <div style={{marginBottom: 50}}>
                <h2>
                    Class component example Three
                </h2>
            </div>
        )
    }
}

export default ClassComponentThree;