import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import beasts from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hornsCount: "true",
    };
  }

  filterBeasts = (event) => {
    this.setState({
      hornsCount: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select Horns Number</Form.Label>
            <Form.Control
              onChange={this.filterBeasts}
              as="select"
              defaultValue="Choose..."
            >
              <option value={true}>All</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={100}>WoW!</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div className="grid">
          {beasts
            .filter((beast) => {
              if (this.state.hornsCount === "true") {
                return true;
              } else {
                return beast.horns === Number(this.state.hornsCount);
              }
            })
            .map((beast, index) => (
              <HornedBeasts
                showHorned={this.props.showHorned}
                key={index}
                beast={beast}
              />
            ))}
        </div>
      </>
    );
  }
}

export default Main;
