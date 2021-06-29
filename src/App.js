import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      selectBeast: null,
    };
  }

  showSelected = (selected) => {
    this.setState({
      selectBeast: (
        <SelectedBeast ref={this.child} show={true} beast={selected} />
      ),
    });
    setTimeout(() => {
      this.child.current.on();
    }, 1);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main showHorned={this.showSelected} />
        <Footer />
        {this.state.selectBeast}
      </div>
    );
  }
}

export default App;
