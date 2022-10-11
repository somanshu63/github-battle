import React from "react";
const categories = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      category: "All",
    };
  }
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          people: data,
        });
      });
  }
  updateCategory(category) {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${category}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          people: data,
        });
      });
  }
  render() {
    let classColor = this.props.day ? "gray" : "black";

    let backgroundColor = this.props.day
      ? "rgb(32, 40, 42)"
      : "rgb(235, 235, 235)";

    return (
      <div className="popular">
        <div className="flex justify-center">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`fs-16 padding-1 fw-600 nobtn ${
                  this.state.category === category
                    ? "red"
                    : !this.props.day
                    ? "black"
                    : "gray"
                }`}
                onClick={() => {
                  this.updateCategory(category);
                  this.setState({
                    category: category,
                    people: null,
                  });
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <section className="flex padding-1">
          {this.state.people ? (
            this.state.people.items.map((person, i) => {
              return (
                <div
                  key={person.name}
                  className="width-250 people-data padding-2"
                  style={{
                    backgroundColor: `${backgroundColor}`,
                  }}
                >
                  <p
                    className={`fs-36 fw-300 text-center padding-1 ${classColor}`}
                  >
                    #{i + 1}
                  </p>
                  <figure className="text-center">
                    <img
                      className=""
                      src={person.owner.avatar_url}
                      alt={person.name}
                    ></img>
                  </figure>
                  <address
                    className={`fs-22 fw-600 text-center text-cap red name-title `}
                  >
                    {person.name}
                  </address>
                  <address
                    className={`padding-500 fs-20 fw-600 name ${classColor}`}
                  >
                    <i className="i-1 fs-22 creme fa-solid fa-user"></i>
                    {person.name}
                  </address>
                  <p className={`padding-500 fs-20 ${classColor}`}>
                    <i className="i-2 fs-22 yellow fa-solid fa-star"></i>{" "}
                    {person.stargazers_count} stars
                  </p>
                  <p className={`padding-500 fs-20 ${classColor}`}>
                    <i className="i-3 fs-22 lightBlue fa-solid fa-code-fork"></i>{" "}
                    {person.forks} forks
                  </p>
                  <p className={`padding-500 fs-20 ${classColor}`}>
                    <i className="i-4 fs-22 lightRed fa-solid fa-triangle-exclamation"></i>
                    {person.open_issues} open issues
                  </p>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </section>
      </div>
    );
  }
}

function Loader() {
  return (
    <div className="loader-cover">
      <div class="loader"></div>
    </div>
  );
}

export default Popular;
