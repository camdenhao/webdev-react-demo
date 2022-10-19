import React, {Component} from 'react';
import DogPosting from './DogPosting';
import '../styles/dog-styling.css';
import db from '../firebase/index';
import axios from 'axios';
class DogBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            dogs: [],
            dogId: 0,
            newDogName: '',
            newDogBreed: '',
            newDogUrl: '',
            selectedDogName: '',
            pokemonName: '',
            pokemonData: {},
        }
    }

    componentDidMount() {
        this.fetchDogs()
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

    saveNewDog = () => { 
        db.collection('dogs').add({
            name: this.state.newDogName,
            breed: this.state.newDogBreed,
            url: this.state.newDogUrl
        }).then(ref => {
          this.setState({
            id: this.state.dogId + 1,
          });
        })
        .then(() =>
            this.fetchDogs()
        ).catch(error => {
        });
    }
    
    fetchDogs = () => {
        const dogData = [];
        db.collection('dogs').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc => {
                    console.log(doc.data());
                    dogData.push(doc.data());
                })
            }).then(() => {
                this.setState({
                    dogs: dogData
                });
            })
            .catch(err => {
                console.log(err.message)
            })
    }
   
    searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
            console.log(res);
            this.setState({pokemonData: res.data});
        })
    }

    render(){
        return(
            <div className="board-container">
                <header>
                    <p className='title'>Dog Board!!!</p>
                </header>
                <input onChange={(event) => this.setState({pokemonName: event.target.value})} />
                <button onClick={() => this.searchPokemon()}>Search for pokemon!</button>
                <p>{this.state.pokemonData.name}</p>
                <img src={this.state.pokemonData.sprites?.front_default} alt="empty"/>
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
                <button className='submit-button' onClick={this.saveNewDog}>Create dog</button> 
                <div className='dog-posting-container'>
                    {this.state.dogs.map(
                        (dog) => {
                            return (
                                <DogPosting
                                name={dog.name}
                                breed={dog.breed}
                                image={dog.url}
                                selectDogFunction={this.selectDog}
                                id={dog.id}
                                key={dog.id}
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