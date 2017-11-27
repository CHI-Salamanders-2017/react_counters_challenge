import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

//This line makes the App class available for inclusion in other files like index.js
export default App;
