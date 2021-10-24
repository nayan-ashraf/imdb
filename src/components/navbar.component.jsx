import React from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/movies.service";
import { getCurrentUser } from "../services/user-service";
import Form from "./common/form.component";

class Navbar extends Form {
  state = {
    data: {search_query: ''},
    errors: "",
    movies: getMovies()
  }

  doSubmit = () => {

  }
  searchMovies = () => {
    if(this.state.data.search_query.trim() === '') return []
    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.data.search_query.toLowerCase()))
  }
      
  
  render() {
    const searched_movies = this.searchMovies().filter((movie,idx) => idx < 10 );
    return (
      <div className="bg-dark header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="./images/logo.png"
                alt="logo"
                style={{ height: "30px", width: "70px" }}
              />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {getCurrentUser() && (
                  <>
                    <li className="nav-item mx-2">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/movies"
                      >
                        Movies
                      </Link>
                    </li>

                    <li className="nav-item mx-2">
                      <Link className="nav-link" to="/add-movie">
                        Add Movies
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <form className="d-flex w-50 mx-auto " onSubmit={this.handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                autoComplete="off"
                placeholder="Search"
                aria-label="Search"
                name="search_query"
                value={this.state.data.search_query}
                onChange={this.changeHandler}
              />
            </form>
            <div
              class={searched_movies.length? "card" :"card d-none"}
              style={{
                width: "33.5rem",
                position: "absolute",
                top: "50px",
                left: "260px",
              }}
            >
              <ul class="list-group list-group-flush">
                {
                  searched_movies.map((movie, idx) => <li class="list-group-item" key={idx}>{movie.title}</li>
                  )
                }
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {getCurrentUser() && (
                  <>
                    <li className="nav-item mx-2">
                      <Link className="nav-link " to="#">
                        <i class="fas fa-user-circle">
                          &nbsp;{getCurrentUser().firstName}
                        </i>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link " to="/logOut">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
                {!getCurrentUser() && (
                  <>
                    <li className="nav-item mx-2">
                      <Link className="nav-link " to="/logIn">
                        Log In
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link " to="signUp">
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
