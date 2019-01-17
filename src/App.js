import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './Components/Feed';
import Login from './Components/Login';
import NavBar from './Components/Nav';
import Edit from './Components/EditPost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
