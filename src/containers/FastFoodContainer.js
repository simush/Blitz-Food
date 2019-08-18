import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import FastFood from '../components/FastFood';
import './FastFoodContainer.css'
import Shaurma from '../components/Shaurma';

// import RouterC from './Routes';

export default class FastFoodContainer extends Component {

    render() {
        
        return (
            <div className="body">
                <div>
                    <h1>Heasfdas</h1>
                    <Link to="shaurma" >Shaurma</Link>
                    <Link to="humburger" >Humburger</Link>
                </div>
            </div> 
        );
    }
}
