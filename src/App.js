import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//layout components
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
//users-related components
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
//pages 
import About from './components/pages/About';

//contexts
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search/>
                  <Users/>
                </Fragment>
              )}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props => (
                <User { ...props }/>
              )}/>
            </Switch>
            
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
