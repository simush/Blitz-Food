import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'

const Routes = () => (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
  );

export default Routes;