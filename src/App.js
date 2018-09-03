import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import './App.css';
import Form from './components/Form';
import Front from './components/Front';
import Carou from './components/Carou';
import Image from './components/Image';
import Errors from './components/Errors';
import Shopping from './components/Shopping';
import Login from './components/Login';

class App extends Component {
  handleLogin=(e)=>{
    e.preventDefault();
    history.push("/login");
  }
  handleHome=(e)=>{
    e.preventDefault();
    history.push("/");
  }
  handleSign=(e)=>{
    e.preventDefault();
    history.push("/form");
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Check Out App</h1>
          <button type="submit" className="btn btn-primary but"
           onClick={(e)=>this.handleHome(e)}>Home</button>
          <button type="submit" className="btn btn-primary but"
           onClick={(e)=>this.handleLogin(e)}>Login</button>
            <button type="submit" className="btn btn-primary but"
            onClick={(e)=>this.handleSign(e)}>Sign Up</button>
        </header>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Front} exact />
            <Route path="/form" component={Form} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/image" component={Image} exact />
            <Route path="/carousel" component={Carou} exact />
            <Route path="/shopping" component={Shopping} exact />
            <Route component={Errors} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
