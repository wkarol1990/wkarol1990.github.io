import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
        counterValue: this.props.initValue
    }
  }

  changeValue = () => {
    this.setState((prevValue) => {
        return ({
            counterValue: prevValue.counterValue + 1
        });
    });
  }

  clearValue = () => {
    this.setState({counterValue: 0});
  }

  firstValue = () => {
    this.setState({counterValue: this.props.initValue});
  }

  setValue = (newValue) => {
    this.setState({counterValue: newValue});
  }

  render() {
    return (
      <div className="counter">
        Licznik: {this.state.counterValue}
        <ButtonPanel 
        changeCounterValue={this.changeValue} 
        changeClearValue={this.clearValue} 
        changeFirstValue={this.firstValue} />
        <SetValuePanel setCounter={this.setValue} />
      </div>
    );
  }
}

export default Counter;