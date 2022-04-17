import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=631d0d72&s=avengers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  searchMovies = (mName = "Avengers", type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=631d0d72&s=${mName}${
        type !== "all" ? `&type=${type}` : ""
      }  `
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    return (
      <div className=" container content">
        <Search searchMovies={this.searchMovies} />
        {!this.state.loading ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
