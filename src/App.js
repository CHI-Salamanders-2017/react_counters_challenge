import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      totalCounterValues: 0,
      counts: () =>

      // counts: {
      //   first: 0,
      //   second: 0,
      //   third: 0
      // }
      // we want counts to be a function
    }
  }

  increment = (countBy, key) => {
    this.setState({
      counts: {
        first: 5
      }
    });
    console.log(this.state)
    // console.log(countBy, countState)
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter countBy={1} countState={this.state.countOfFirst} increment={this.increment} />
        <Counter countBy={2} increment={this.increment} />
        <Counter countBy={3} increment={this.increment} />
      </div>
    );
  }
}

export default App;
