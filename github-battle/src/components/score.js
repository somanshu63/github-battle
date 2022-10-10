import React from "react";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user1 = this.props.userDetails.username1;
    const user2 = this.props.userDetails.username2;
    const score1 = user1.followers * 20 + user1.public_repos;
    const score2 = user2.followers * 20 + user2.public_repos;
    let classColor = this.props.day ? "gray" : "black";
    let classColor2 = !this.props.day ? "gray" : "black";
    let backgroundColor = this.props.day
      ? "rgb(32, 40, 42)"
      : "rgb(235, 235, 235)";
    let backgroundColor2 = !this.props.day
      ? "rgb(32, 40, 42)"
      : "rgb(235, 235, 235)";

    return (
      <>
        <div className="flex justify-space-evenly">
          <div
            key={user1.name}
            className="width-250 people-data padding-2"
            style={{
              backgroundColor: `${backgroundColor}`,
            }}
          >
            <p className={`fs-36 fw-300 text-center padding-1 ${classColor}`}>
              {score1 > score2 ? "Winner" : "Loser"}
            </p>
            <figure className="text-center">
              <img className="" src={user1.avatar_url} alt={user1.name}></img>
            </figure>
            <p className={`padding-500 text-center fs-16 fw-500 ${classColor}`}>
              score: {score2}
            </p>
            <address
              className={`fs-22 fw-600 text-center text-cap red name-title `}
            >
              {user1.name}
            </address>
            <address className={`padding-500 fs-20 fw-600 name ${classColor}`}>
              <i className="i-5 fs-22 creme i fa-solid fa-user"></i>
              {user1.name}
            </address>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="i-6 blue fa-solid fa-compass"></i>
              {user1.location}
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="i-7 brown fa-solid fa-briefcase"></i>
              {user1.company}
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="green i-8 fa-solid fa-users"></i>
              {user1.followers} followers
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="blue i-9 fa-solid fa-users"></i>
              {user1.following} following
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="i-0 fa-solid fa-code"></i>
              {user1.public_repos} repositeries
            </p>
          </div>
          <div
            key={user2.name}
            className="width-250 people-data padding-2"
            style={{
              backgroundColor: `${backgroundColor}`,
            }}
          >
            <p className={`fs-36 fw-300 text-center padding-1 ${classColor}`}>
              {score2 > score1 ? "Winner" : "Loser"}
            </p>
            <figure className="text-center">
              <img className="" src={user2.avatar_url} alt={user2.name}></img>
            </figure>
            <p className={`padding-500 text-center fs-16 fw-500 ${classColor}`}>
              score: {score1}
            </p>
            <address
              className={`fs-22 fw-600 text-center text-cap red name-title `}
            >
              {user2.name}
            </address>
            <address className={`padding-500 fs-20 fw-600 name ${classColor}`}>
              <i className="i-5 fs-22 creme i fa-solid fa-user"></i>
              {user2.name}
            </address>
            {user2.location ? (
              <p className={`padding-500 fs-20 ${classColor}`}>
                <i class="i-6 blue fa-solid fa-compass"></i>
                {user2.location}
              </p>
            ) : (
              ""
            )}
            {user2.company ? (
              <p className={`padding-500 fs-20 ${classColor}`}>
                <i class="i-7 brown fa-solid fa-briefcase"></i>
                {user2.company}
              </p>
            ) : (
              ""
            )}
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="green i-8 fa-solid fa-users"></i>
              {user2.followers} followers
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="blue i-9 fa-solid fa-users"></i>
              {user2.following} following
            </p>
            <p className={`padding-500 fs-20 ${classColor}`}>
              <i class="i-0 fa-solid fa-code"></i>
              {user2.public_repos} repositeries
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            style={{
              backgroundColor: `${backgroundColor2}`,
            }}
            onClick={() => {
              this.props.handleState("instructions", !this.state.instructions);
            }}
            className={`fs-20 btn nobtn ${classColor2}`}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Score;
