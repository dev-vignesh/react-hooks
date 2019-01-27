import React from 'react';

class ClassComponentFour extends React.Component {
    state = {
        year: 1995,
        type: 'Mercedes',
        used: true        
    };

    swapCar = () => {
        this.setState({
            year: 2018,
            type: 'BMW',
            used: false  
        })
    }

    render() {
        return(
            <div style={{marginBottom: 50}}>
                <h2>Class component example four</h2>
                <h3>Car Spec is:</h3>
                <ul>
                    <li>{this.state.year}</li>
                    <li>{this.state.type}</li>
                    <li>{this.state.used ? "Used Car" : "Brand New"}</li>
                </ul>
                <button onClick={this.swapCar}>Swap</button>
            </div>
        )
    }
}

export default ClassComponentFour;