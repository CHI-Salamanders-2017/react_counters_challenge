import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: [0, 0, 0],
      total: 0,
      countObj: [
        { value: 0, countBy: 1 },
        { value: 0, countBy: 2 },
        { value: 0, countBy: 3 }
      ]
    }
  }

  increment = (countBy, index) => {
    const count = [...this.state.countObj[0]];

    count[index] = count[index] + countBy;
    this.setState({ count });
    this.setState({ total: count.reduce((sum, newTotal) => sum + newTotal)});
  }

  decrement = (countBy, index) => {
    const count = [...this.state.count];
    count[index] = count[index] - countBy;
    this.setState({ count });
    this.setState({ total: count.reduce((sum, newTotal) => sum + newTotal)});
  }



  render() {
    // console.log(this.state.countObj[0].countBy)
    // this.state.countObj.map((value, index) =>
      // console.log(value));
    return (
      <div className="page-center-frame">
        {
          this.state.countObj.map((value, index) =>
            <Counter
              countBy={value.countBy}
              increment={this.increment}
              decrement={this.decrement}
              count={value.value}
              index={index} />
          )
        }
      <div className="total">{this.state.total}</div>
      </div>
      )
  };
}

export default App;
