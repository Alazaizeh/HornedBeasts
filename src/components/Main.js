import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import beasts from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
class Main extends Component {
  render() {
    return (
      <div className="grid">
        {beasts.map((beast, index) => (
          <HornedBeasts key={index} beast={beast} />
        ))}
      </div>
    );
  }
}

export default Main;
