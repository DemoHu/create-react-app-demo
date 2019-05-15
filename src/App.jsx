import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import LayoutBox from './views/Layout/Layout';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Redirect exact to="/home" from="/" />
            <Route path="/" component={ LayoutBox } />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

