import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import beasts from "./data.json";
class Main extends Component {
  render() {
    return (
      <div>
        {beasts.map((beast, index) => (
          <HornedBeasts key={index} beast={beast} />
        ))}
      </div>
    );
  }
}

export default Main;
