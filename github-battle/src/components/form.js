import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username1: null,
      username2: null,
      username1details: null,
      username2details: null,
    };
  }
  handleFetch = (username, user) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((details) => details.json())
      .then((details) => {
        this.setState({
          [`username${user}details`]: details,
        });
      });
  };
  render() {
    let classColor = this.props.day ? "gray" : "black";
    let classColor2 = !this.props.day ? "gray" : "black";
    let backgroundColor = this.props.day
      ? "rgb(32, 40, 42)"
      : "rgb(235, 235, 235)";
    let backgroundColor2 = !this.props.day
      ? "rgb(32, 40, 42)"
      : "rgb(235, 235, 235)";
    return (
      <div className="form">
        <h2 className={`fs-32 text-center margin-3 ${classColor}`}>Players</h2>
        <div className="flex align-center">
          <div className="width-50">
            <h4 className={`fs-24 text-cap padding-5px ${classColor}`}>
              player one
            </h4>
            {this.state.username1details ? (
              <div
                className="flex justify-space-between player-details align-center"
                style={{
                  backgroundColor: `${backgroundColor}`,
                }}
              >
                <div className="flex align-center">
                  <img
                    src={this.state.username1details.avatar_url}
                    alt={this.state.username1details.name}
                  ></img>
                  <address className="fs-24 text-cap red">
                    {this.state.username1details.name}
                  </address>
                </div>
                <button
                  onClick={() => {
                    this.setState({
                      username1details: null,
                    });
                  }}
                  className="cross fs-32 padding-0-3 nobtn red"
                >
                  X
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.handleFetch(this.state.username1, 1);
                }}
              >
                <div className="flex align-center">
                  <input
                    className="input"
                    onChange={(event) => {
                      this.setState({
                        username1: event.target.value,
                      });
                    }}
                    type="text"
                    name="name1"
                    placeholder="enter guthub username"
                  ></input>
                  <input
                    className={`submit fw-500 ${classColor}`}
                    type="submit"
                    value="SUBMIT"
                    style={{
                      backgroundColor: `${backgroundColor}`,
                    }}
                    disabled={this.state.username1 ? "" : "disabled"}
                  ></input>
                </div>
              </form>
            )}
          </div>
          <div className="width-50">
            <h4 className={`fs-24 text-cap padding-5px ${classColor}`}>
              player two
            </h4>
            {this.state.username2details ? (
              <div
                className="flex justify-space-between player-details align-center"
                style={{
                  backgroundColor: `${backgroundColor}`,
                }}
              >
                <div className="flex align-center">
                  <img
                    src={this.state.username2details.avatar_url}
                    alt={this.state.username2details.name}
                  ></img>
                  <address className="fs-24 text-cap red">
                    {this.state.username2details.name}
                  </address>
                </div>

                <button
                  onClick={() => {
                    this.setState({
                      username2details: null,
                    });
                  }}
                  className="cross fs-32 padding-0-3 nobtn red"
                >
                  X
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.handleFetch(this.state.username2, 2);
                }}
              >
                <div className="flex align-center">
                  <input
                    className="input"
                    onChange={(event) => {
                      this.setState({
                        username2: event.target.value,
                      });
                    }}
                    type="text"
                    name="name2"
                    placeholder="enter guthub username"
                  ></input>
                  <input
                    className={`submit fw-500 ${classColor}`}
                    type="submit"
                    value="SUBMIT"
                    style={{
                      backgroundColor: `${backgroundColor}`,
                    }}
                    disabled={this.state.username2 ? "" : "disabled"}
                  ></input>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="text-center margin-3">
          {this.state.username1details && this.state.username2details ? (
            <button
              style={{
                backgroundColor: `${backgroundColor2}`,
              }}
              className={`fs-20 btn nobtn ${classColor2}`}
              onClick={() => {
                this.props.handleState(
                  "instructions",
                  !this.props.state.instructions
                );
                this.props.handleState(
                  "username1",
                  this.state.username1details
                );
                this.props.handleState(
                  "username2",
                  this.state.username2details
                );
              }}
            >
              Battle
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Form;
