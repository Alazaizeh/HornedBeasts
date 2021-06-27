import React, { Component } from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <div className="beast">
        <h2>{this.props.beast.title}</h2>
        <img
          src={this.props.beast.image_url}
          title={this.props.beast.title}
          alt={this.props.beast.keyword}
        ></img>
        <p>{this.props.beast.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
