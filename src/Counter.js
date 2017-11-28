import React from 'react';
import './Counter.css';

class Counter extends React.Component {

  render() {
    return (
      <div>
        <div className="counter">
          <button onClick={ () => {this.props.increment(this.props.countBy, this.props.index)} }>+</button>
          <div className="count"> {this.props.count}</div>
          <button onClick={ () => {this.props.decrement(this.props.countBy, this.props.index)} }>-</button>
        </div>
        <div className="total">{this.props.total}</div>
      </div>
      )
  }
}



export default Counter
