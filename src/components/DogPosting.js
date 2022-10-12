import React, { Component } from 'react';

class DogPosting extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.breed}</p>
                <img src={this.props.image} alt="dog"/>
                <button onClick={() => this.props.selectDogFunction(this.props.name)}>Select me!!!!</button>
            </div>
        )
    }
}
export default DogPosting;