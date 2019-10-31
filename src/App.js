import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
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
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
