import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value : this.props.value,
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
      </React.Fragment>
      );
  }

  handleIncrement = ()=>{
    this.setState( {value:this.state.value + 1} );
  }

  getBadgeClasses(){
    const {value} = this.state;
    return value === 0 ? 'badge badge-primary m-3' : 'badge badge-warning m-3'
  }

  formatCount(){
    const {value} = this.state
    return value === 0 ? 'Zero' : value;
  }

}
 
export default Counter;