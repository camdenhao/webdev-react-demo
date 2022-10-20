import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing-styling.css';
class LandingPage extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="container">
                <div className="heading">
                    <p>This is the landing page!</p>
                </div>
                <h1>Do you like dogs???? Click this button!!!</h1>
                <div className="link-container">
                    <Link to="/board" className="link-text">Go to board</Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;