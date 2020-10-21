import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Goofy.svg/200px-Goofy.svg.png"} />
      </div>
    );
  }
}

export default App;