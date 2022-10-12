import React, {Component} from 'react';
import { Map } from 'immutable';
import DogPosting from './DogPosting';
import '../styles/dog-styling.css';
class DogBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            dogs: Map(),
            dogId: 0,
            newDogName: '',
            newDogBreed: '',
            newDogUrl: '',
            selectedDogName: '',
        }
    }

    handleNewDogName = (event) => {
        this.setState({newDogName: event.target.value});
    }
    
    handleNewDogBreed = (event) => {
        this.setState({newDogBreed: event.target.value});
    }

    handleNewDogUrl = (event) => {
        this.setState({newDogUrl: event.target.value});
    }

    createDog = () => {
        let dogData = {
            name: this.state.newDogName,
            breed: this.state.newDogBreed,
            image: this.state.newDogUrl
        }

        this.setState({
            dogs: this.state.dogs.set(this.state.dogId, dogData),
            dogId: this.state.dogId + 1,
        })
    }

    selectDog = (name) => {
        this.setState({selectedDogName: name});
    }
   

    render(){
        return(
            <div className="board-container">
                <header>
                    <p className='title'>Dog Board!!!</p>
                </header>
                <p>Selected Name:</p>
                <p>{this.state.selectedDogName}</p>
                <div className='input-container'>
                    <div className='form-field'>
                        <p>Name:</p>
                        <input className='form-input' onChange={this.handleNewDogName}/> 
                    </div>
                    <div className='form-field'>
                        <p>Breed:</p>
                        <input className='form-input' onChange={this.handleNewDogBreed}/>
                    </div>
                    <div className='form-field'>
                        <p>Image URL:</p>
                        <input className='form-input' onChange={this.handleNewDogUrl}/>
                    </div>
                </div>
                <button className='submit-button' onClick={this.createDog}>Create dog</button> 
                <div className='dog-posting-container'>
                    {this.state.dogs.entrySeq().map(
                        ([id, dog]) => {
                            return (
                                <DogPosting
                                name={dog.name}
                                breed={dog.breed}
                                image={dog.image}
                                selectDogFunction={this.selectDog}
                                id={id}
                                key={id}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default DogBoard;