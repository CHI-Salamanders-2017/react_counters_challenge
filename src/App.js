import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counterValues: [
        { value: 0, countBy: 1 },
        { value: 0, countBy: 2 },
        { value: 0, countBy: 3 }
      ]
    }
  }

  getTotal = () => {
    return this.state.counterValues.reduce((sum, counter) => sum + counter.value, 0);
  }

  increment = (countBy, index) => {
    this.setState((prevState, props) => prevState.counterValues[index].value += prevState.counterValues[index].countBy)
  }

  decrement = (countBy, index) => {
    this.setState((prevState, props) => prevState.counterValues[index].value -= prevState.counterValues[index].countBy)
  }



  render() {
    return (
      <div className="page-center-frame">
        {
          this.state.counterValues.map((value, index) =>
            <Counter
              countBy={value.countBy}
              increment={this.increment}
              decrement={this.decrement}
              count={value.value}
              index={index} />
          )
        }
      <div className="total">{this.getTotal()}</div>
      </div>
      )
  };
}

export default App;
