import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import { Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  // Handle Alert box
  const handleAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search showAlert={handleAlert} />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => <User {...props} />}
            />
          </Switch>
        </div>
      </div>
    </GithubState>
  );
};

export default App;
