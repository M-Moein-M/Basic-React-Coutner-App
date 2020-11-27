import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBarComponent';
import Counters from './components/countersComponent';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: newCounters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.findIndex((c) => c.id === counter.id);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };
}

export default App;
