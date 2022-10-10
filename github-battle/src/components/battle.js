import React from "react";
import Instructions from "./instructions";
import Form from "./form";
import Score from "./score";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username1: null,
      username2: null,
      instructions: true,
    };
  }

  handleState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  render() {
    return (
      <div className="battle padding-3">
        {!this.state.instructions ? (
          <Score
            userDetails={this.state}
            handleState={this.handleState}
            day={this.props.day}
          />
        ) : (
          [
            <Instructions day={this.props.day} />,
            <Form
              state={this.state}
              day={this.props.day}
              handleState={this.handleState}
            />,
          ]
        )}
      </div>
    );
  }
}
export default Battle;
