import React from 'react';
import Table from './common/table/table.component'

const MoviesTable = ({ movies, handleRating, onSort, sortedColumn }) => {
  const columns = [
    {  path: 'posterurl', label: '', content: movie => <img style={{width:'40px' , height:'50px'}} src={movie.posterurl} alt='img' />},
    {  path: 'title', label: 'Title', content: movie => movie.title },
    {  path: 'imdbRating', label: 'Rating', content: movie => movie.imdbRating },
    {  path: 'isRated', label: 'Your Rating', content: (movie, id) => <i class={( movie.isRated === true ) ? "fas fa-star":"far fa-star"} onClick={()=> handleRating(id) }></i>},
  ]
    return ( 
        <>
          <Table items={ movies } columns={ columns } onSort={ onSort } sortedColumn={ sortedColumn } />
        </>
          
     );
}
 
export default MoviesTable;