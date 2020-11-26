import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 3},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
   }
  render() { 
    return ( <div>
      <button onClick={this.handleReset} className="btn btn-primary btn-sm m-3">Reset</button>
      { this.state.counters.map( counter => <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} /> )}
    </div> );
  }

  handleReset = ()=>{
    const newCounters = this.state.counters.map( c => {
      c.value = 0;
      return c;
    })
    this.setState({ counter : newCounters});
  }

  handleDelete= (counterId)=>{
    const newCounters = this.state.counters.filter(c=>c.id!==counterId)
    this.setState({counters:newCounters})
  }

  handleIncrement = (counter) =>{
    const newCounters = [...this.state.counters];
    const index = newCounters.findIndex( c => c.id === counter.id);
    newCounters[index] = {...counter};
    newCounters[index].value ++;
    this.setState({ counters : newCounters });
  }
}
 
export default Counters;