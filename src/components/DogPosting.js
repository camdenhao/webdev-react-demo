import React, { Component } from 'react';
import '../styles/dog-styling.css';

class DogPosting extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='dog-posting'>
                <img src={this.props.image} alt="dog" className='dog-image'/>
                <div className='dog-info'>
                    <p>{this.props.name}</p>
                    <p>{this.props.breed}</p>
                </div>
                <button className='select-button' onClick={() => this.props.selectDogFunction(this.props.name)}>Select me!!!!</button>
            </div>
        )
    }
}
export default DogPosting;