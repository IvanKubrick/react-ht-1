import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textValue: ""
  };

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      textValue: value
    });
  };

  removeChar = index => {
    const text = this.state.textValue;
    const updatedText = text.slice(0, index) + text.slice(index + 1);

    this.setState({
      textValue: updatedText
    });
  };

  render() {
    const chars = this.state.textValue.split("").map((char, index) => {
      return (
        <CharComponent
          char={char}
          key={index}
          click={() => this.removeChar(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.textValue}
        />
        <p>{this.state.textValue.length}</p>
        <ValidationComponent length={this.state.textValue.length} />
        {chars}
      </div>
    );
  }
}

export default App;
