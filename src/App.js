import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBarComponent';
import Counters from './components/countersComponent';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
