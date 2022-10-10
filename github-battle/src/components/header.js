import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="flex justify-space-between">
          <div className="flex">
            <NavLink to="/">
              <button
                onClick={() => {
                  this.props.handleActive("popular");
                }}
                className={`fs-20 fw-600 text-cap nobtn ${
                  this.props.state.active === "popular" ? "red" : "gray"
                } `}
              >
                popular
              </button>
            </NavLink>
            <NavLink to="/battle">
              <button
                onClick={() => {
                  this.props.handleActive("battle");
                }}
                className={`fs-20 fw-600 text-cap nobtn ${
                  this.props.state.active === "battle" ? "red" : "gray"
                } `}
              >
                battle
              </button>
            </NavLink>
          </div>
          <button
            className="fs-24 red nobtn"
            onClick={() => {
              this.props.handleDay();
            }}
          >
            {!this.props.state.day ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
