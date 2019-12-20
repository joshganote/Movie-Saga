import React, { Component } from 'react';
import './App.css';

//React-Router
import { HashRouter as Router, Route,} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Edit from '../pages/Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App"></div>
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/edit" exact component={Edit} />

      </Router>
    );
  }
}

export default App;
