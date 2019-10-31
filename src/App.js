import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserAuthentication from './Views/UserAuthentication';
import NewsFeed from './Views/NewsFeed';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserAuthentication}/>
        <Route exact path="/newsfeed" component={NewsFeed} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
