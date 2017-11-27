import React from 'react';
import './Counter.css';

class Counter extends React.Component {

  // increment = (countBy) => {
  //   this.setState({ count: this.state.count + this.props.countBy })
  // }

  // We're going to need this
  // decrement = (countBy) => {
  //   this.setState({ count: this.state.count - this.props.countBy })
  // }

  render() {
    console.log(this.props)
    return (
      <div className="counter">
        <button onClick={() => this.props.increment(this.props.countBy, this.props.countState)}>+</button>
      </div>
      )
  }
}

        // <div className="count">{this.state.count}</div>
        // <button onClick={this.decrement}>-</button>


export default Counter
