import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    textLength: 0
  };

  handleInputChange = event => {
    const length = event.target.value.length;

    this.setState({ textLength: length });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleInputChange} />
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}

export default App;
