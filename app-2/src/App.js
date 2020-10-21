import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      crazyIdeas: ["finger guns", "dog cell phones", "mini computers", 
      "edible casings with ground up meat inside", "edible culturized milk products"]
    };
  }

  render() {
    let ideasToDisplay = this.state.crazyIdeas.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{ideasToDisplay}</div>;
  }
}

export default App;