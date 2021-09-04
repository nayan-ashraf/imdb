import React, { Component } from "react";
import { BsFillBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";
import Pagination from "./common/pagination";
import Navbar from './navbar';
import { getMovies,getGenres } from '../services/movies.service';
import Filter from './common/filtering'
import "./data";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    activePage: 1,
    pageCount: 5,
    selectedGenre: ''
  };

  handleRating = (idx) => {
         
           const updateMovies = this.state.movies.map((movie) => {
             if(movie.id == idx) {
               let ratingStatus;
               if(movie.rating === 'Unrated') ratingStatus = 'rated'
               if(movie.rating === 'rated') ratingStatus = 'Unrated'
               const newData = {...movie, rating: ratingStatus}
               return newData;
              
             }
             return movie;
             
           })
           this.setState({...this.state, movies: updateMovies});
         }
      
   handleSingleGenre = (name) => {
     this.setState({...this.state, selectedGenre: name})
   } 

  
  paginateMovies = () => {
    const { movies, activePage, pageCount, genres } = this.state;
        const start = (activePage-1)*pageCount;
        const updatedMovies = movies.slice(start, start+pageCount);
        return updatedMovies;
  }

  changePageHandler = (page) => {
      this.setState({...this.state.movies, activePage: page});
  }

  searchHandler = () => {
    const filter = document.getElementById('search').value.toUpperCase();
    const tr = document.getElementById('table').getElementsByTagName('tr');
    for(let i=0; i< tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[0];
        if(td) {
            let textValue = td.textContent || td.innerHTML;
            console.log(textValue.toUpperCase().indexOf(filter))
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}
  render() {    
      const movies = this.paginateMovies()
      
    return (
      <>
      <Navbar 
      search = {this.searchHandler}
  />
        <div className=" container">
      <div className="row container bg-light">
        <div className="col-md-10">
          <p className="pb-1 pt-3">Showing {movies.length} movies</p>
          <table className="table table-striped" id="table">
            <thead>
              <tr>
                <th scope="col"></th>
               
                <th scope="col" style={{ color: "gray" }}>
                  Rank & Title
                </th>
                <th scope="col" style={{ color: "gray" }}>
                  IMDB Ratings
                </th>
                <th scope="col" style={{ color: "gray" }}>
                  Your Ratings
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, idx) => (
                <tr>
                  
                  <th scope="row">
                    <img src={movie.posterurl} height="60" width="40" />
                  </th>                 
                  <td>{movie.title}</td>
                  <td><BsStarFill /> {movie.imdbRating}</td>
                  <td onClick={()=>(this.handleRating(idx+1))}>
                    {(movie.rating) === 'rated' ? <BsStarFill /> : <BsStar />}
                  </td>
                  <td>
                    <BsFillBookmarkFill
                      style={{ "color": "gray", "fontSize": "30px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            total = {this.state.movies.length}
            pageCount = {5}
            activePage = { this.state.activePage }
            onPageChange = { this.changePageHandler }
           />
        </div>
        <div className="col-md-2 mt-5 pt-5">

            <Filter genres = {this.state.genres} 
                    handleSingleGenre = { this.handleSingleGenre }
                    selectedGenre = { this.state.selectedGenre }
            />
        </div>
      </div>
      </div>
      </>
    )
  }
}
export default Movies;