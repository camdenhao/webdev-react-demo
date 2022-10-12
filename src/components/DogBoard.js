import React, {Component} from 'react';
import { Map } from 'immutable';
import DogPosting from './DogPosting';

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
            <div>
                <p>This is the dog board!!!</p>
                <p>Here is your selected dog name:</p>
                <p>{this.state.selectedDogName}</p>
                <input onChange={this.handleNewDogName}/> 
                <input onChange={this.handleNewDogBreed}/>
                <input onChange={this.handleNewDogUrl}/>
                <button onClick={this.createDog}>Create dog</button> 
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
        )
    }
}

export default DogBoard;