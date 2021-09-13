import React, { Component } from "react";
import Pagination from "./common/pagination";
import Navbar from './navbar';
import { getMovies, getGenres } from '../services/movies.service';
import Filter from './common/filtering'
import "./data";
import MoviesTable from "./movies.table";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ 'name': 'All Genres'}, ...getGenres()],
    activePage: 1,
    pageCount: 5,
    selectedGenre: 'All Genres'
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
     this.setState({...this.state, selectedGenre: name, activePage: 1})
   } 

  
  paginateMovies = (movies) => {
    const { activePage, pageCount } = this.state;
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

filteredMovies = () => {
  const { movies, selectedGenre } = this.state;

  const filteredMovies =  movies.filter(movie => {
    if(selectedGenre === 'All Genres') return true;
    if(movie.genres.includes(selectedGenre)) return true;
    return false;
  })
  return filteredMovies;
}
  render() {    
    const filtered = this.filteredMovies();
    const movies = this.paginateMovies(filtered)
      
    return (
      <>
        <Navbar 
          search={this.searchHandler}         
        />
        <div className=" container">
          <div className="row container bg-light">
            <div className="col-md-10">
              <p className="pb-1 pt-3">Showing {movies.length} movies</p>
              <MoviesTable 
                movies={movies}               
              />
              <Pagination
                total={filtered.length}
                pageCount={this.state.pageCount}
                activePage={this.state.activePage}
                onPageChange={this.changePageHandler}
              />
            </div>
            <div className="col-md-2 mt-5 pt-5">
              <Filter
                items={this.state.genres.map((genre, idx) => ({
                  _id: idx,
                  name: genre.name,
                }))}
                onClick={this.handleSingleGenre}
                selectedItem={this.state.selectedGenre}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Movies;