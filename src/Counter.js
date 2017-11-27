import React from 'react';
import './Counter.css';

class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
      <button onClick={ () => { this.props.increment(this.props.indexToModify, this.props.howMuchToIncrement) } }>+</button>
        <div className="count">{ this.props.count }</div>
        <button onClick={ () => { this.props.decrement(this.props.indexToModify, this.props.howMuchToIncrement) } }>-</button>
      </div>
    );
  }
}

export default Counter