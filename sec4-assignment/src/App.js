import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  state = {
    userInput: '',
    length: 0,
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
      length: event.target.value.length,
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText,
    });
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    })

    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} value={this.state.userInput} />
        <p>{this.state.length}</p>
        <Validation
          length={this.state.length} />
        {charList}
      </div>
    );
  }
}

export default App;
