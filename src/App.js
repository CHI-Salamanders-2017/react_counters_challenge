import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: [0, 0, 0],
      total: 0
    }
  }

  increment = (countBy, index) => {
    const count = [...this.state.count];
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
    return (
      <div className="page-center-frame">
        <Counter countBy={1} increment={this.increment} decrement={this.decrement} count={this.state.count[0]} index={0} />
        <Counter countBy={2} increment={this.increment} decrement={this.decrement} count={this.state.count[1]} index={1} total={this.state.total} />
        <Counter countBy={3} increment={this.increment} decrement={this.decrement} count={this.state.count[2]} index={2}  />
      </div>
    );
  }
}

export default App;
