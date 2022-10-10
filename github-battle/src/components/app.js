import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import Popular from "./popular";
import Battle from "./battle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "popular",
      day: false,
    };
  }
  handleDay = () => {
    this.setState({
      day: !this.state.day,
    });
  };
  handleActive = (value) => {
    this.setState({
      active: value,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div
          className="main padding-2"
          style={{
            backgroundColor: `${this.state.day ? "rgb(28, 32, 34)" : ""}`,
          }}
        >
          <Header
            state={this.state}
            handleActive={this.handleActive}
            handleDay={this.handleDay}
          />
          <Route path="/" exact>
            <Popular day={this.state.day} />
          </Route>
          <Route path="/battle">
            <Battle day={this.state.day} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
