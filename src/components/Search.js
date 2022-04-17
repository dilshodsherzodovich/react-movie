import React from "react";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: "Avengers",
      type: "all",
    };
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.searchMovie, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.searchMovie, this.state.type);
      }
    );
  };

  render() {
    const { searchMovies } = this.props;
    return (
      <div className="Search">
        <div className="row">
          <div className="col s6">
            <div className="input__field">
              <input
                type="search"
                placeholder="Search movie"
                value={this.state.searchMovie}
                onChange={(e) => {
                  this.setState({ searchMovie: e.target.value });
                }}
                onKeyDown={this.handleKey}
              />
            </div>
          </div>
          <div className="col s2">
            <button
              onClick={() => {
                searchMovies(this.state.searchMovie, this.state.type);
              }}
              className="searchBtn"
            >
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s8">
            <div className="row">
              <label className="radio">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  checked={this.state.type === "all"}
                  onChange={this.handleFilter}
                />
                <span>All</span>
              </label>
              <label className="radio">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                />
                <span>Movies only</span>
              </label>
              <label className="radio">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
