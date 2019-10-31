import React from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import Home from './components/Home';
import Alert from './components/Alert';
import About from './components/About';
import NotFound from './components/NotFound';
import { Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="App">
          <Navbar />
          <div className="container mt-4">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
