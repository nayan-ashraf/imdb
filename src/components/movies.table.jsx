import React from 'react';
import { BsFillBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";


const MoviesTable = ({movies}) => {
    return ( 
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
     );
}
 
export default MoviesTable;