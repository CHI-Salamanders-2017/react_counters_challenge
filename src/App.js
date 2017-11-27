import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0,
      counterValues: [
        {
          value: 0,
          howMuchToIncrement: 1
        },
        {
          value: 0,
          howMuchToIncrement: 2
        }
      ]
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(index, howMuchToIncrement) {
    this.setState((prevState, props) => {
      prevState.counterValues[index].value += howMuchToIncrement;
      return prevState;
    });
  }

  decrement(index, howMuchToIncrement) {
    this.setState((prevState, props) => {
      prevState.counterValues[index].value -= howMuchToIncrement;
      return prevState;
    });
  }

  render() {
    const foos = this.state.counterValues.map((value, index, wholeArray) => {
        console.log(value);

      return (
        <Counter indexToModify={ index } count={ value.value } increment={ this.increment } decrement={ this.decrement } howMuchToIncrement={ value.howMuchToIncrement }  />
      )
    })


    console.log(foos)
    return (
      <div className="page-center-frame">
        {
          foos
        }
      </div>
    );
  }
}

export default App;
