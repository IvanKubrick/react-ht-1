import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textValue: "",
    textLength: 0
  };

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      textValue: value,
      textLength: value.length
    });
  };

  removeChar = index => {
    const text = this.state.textValue;
    const updatedText = text.slice(0, index) + text.slice(index + 1);

    this.setState({
      textValue: updatedText,
      textLength: this.state.textLength - 1
    });
  };

  render() {
    const chars = this.state.textValue.split("").map((char, index) => {
      return <CharComponent char={char} click={() => this.removeChar(index)} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.textValue}
        />
        <p>{this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {chars}
      </div>
    );
  }
}

export default App;
