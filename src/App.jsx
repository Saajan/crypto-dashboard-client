import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './route/Login';
import Register from './route/Register';
import Dashboard from './route/Dashboard';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-container">
            <Switch>
              <Route path="/register" component={props => <Register {...props}/>} />
              <Route path="/login" component={props => <Login {...props}/>} />
              <Route path="/dashboard" component={props => <Dashboard {...props}/>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
