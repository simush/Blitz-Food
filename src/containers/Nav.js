import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FastFoodContainer from './FastFoodContainer';
import Shaurma from '../components/Shaurma';
import Humburger from '../components/Humburger';
import UI from '../UI';

export default class Nav extends React.Component {

    state={
        data:[]
    }

    componentWillMount = () => {
        fetch('http://localhost:3000/Food')
            .then(responce => responce.json())
            .then(body => this.setState({data : body}))
            .catch(err => console.error(err));
    }

    shaurma = () => {
        return (
            <Shaurma  data={this.state.data}/>);
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={UI} />
                        <Route path="/FastFoodContainer" component={FastFoodContainer} />
                        <Route path="/shaurma" component={this.shaurma} />
                        <Route path="/humburger" component={Humburger} />
                    </Switch>
                </div>  
            </Router>
        );
    }
}