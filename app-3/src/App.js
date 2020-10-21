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

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let ideasToDisplay = this.state.crazyIdeas
      .filter((element) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {ideasToDisplay}
      </div>
    );
  }
}

export default App;