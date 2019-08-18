import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './FastFoodContainer.css'

export default class FastFoodContainer extends Component {

    render() {
        
        return (
            <div className="body">
                <div>
                    <Link to="shaurma" >Shaurma</Link>
                    <Link to="humburger" >Humburger</Link>
                </div>
            </div> 
        );
    }
}
