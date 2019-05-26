import React, {Component} from 'react';
import './App.css';

import Counter from './Counter';
import Heading from './Heading';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Heading headingText="Aplikacja Counter" />
        <Counter initValue={33} />

        <Heading headingText="Aplikacja Counter wersja 2" />
        <Counter initValue={105} />

      </div>
    );
  }
}

export default App;
