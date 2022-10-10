import React from "react";

function Instructions(props) {
  return (
    <section className="text-center">
      <h2 className={`text-cap fs-32 fw-300 ${!props.day ? "black" : "gray"}`}>
        instructions
      </h2>
      <div className="flex justify-center">
        <div className="margin-3 text-center">
          <h3
            className={`text-cap fs-24 text-center ${
              !props.day ? "black" : "gray"
            }`}
          >
            enter two github users
          </h3>
          <div
            className="cover"
            style={{
              backgroundColor: `${
                props.day ? "rgb(36, 40, 42)" : "rgb(235, 235, 235)"
              }`,
            }}
          >
            <i className="creme fa-solid fa-user"></i>
          </div>
        </div>
        <div className="margin-3 text-center">
          <h3
            className={`text-cap fs-24 text-center ${
              !props.day ? "black" : "gray"
            }`}
          >
            battle
          </h3>
          <div
            className="cover"
            style={{
              backgroundColor: `${
                props.day ? "rgb(36, 40, 42)" : "rgb(235, 235, 235)"
              }`,
            }}
          >
            <i
              className={`${
                !props.day ? "blackGray" : "gray"
              } fa-solid fa-jet-fighter`}
            ></i>
          </div>
        </div>
        <div className="margin-3 text-center">
          <h3
            className={`text-cap fs-24 text-center ${
              !props.day ? "black" : "gray"
            }`}
          >
            see the winner
          </h3>
          <div
            className="cover"
            style={{
              backgroundColor: `${
                props.day ? "rgb(36, 40, 42)" : "rgb(235, 235, 235)"
              }`,
            }}
          >
            <i className="yellow fa-solid fa-trophy"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
