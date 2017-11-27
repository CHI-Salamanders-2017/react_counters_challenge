import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }


  increment = (countBy) => {
    this.setState({ count: this.state.count + this.props.countBy })
  }

  decrement = (countBy) => {
    this.setState({ count: this.state.count - this.props.countBy })
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div className="count">{this.state.count}</div>
        <button onClick={this.decrement}>-</button>
      </div>
      )
  }
}



export default Counter
