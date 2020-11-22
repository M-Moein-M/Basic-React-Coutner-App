import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0,
    tags: ['tag1', 'tag2', 'tag3']
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
      );
  }

  getBadgeClasses(){
    const {count} = this.state;
    return count === 0 ? 'badge badge-primary m-3' : 'badge badge-warning m-3'
  }

  formatCount(){
    const {count} = this.state
    return count === 0 ? 'Zero' : count;
  }

}
 
export default Counter;