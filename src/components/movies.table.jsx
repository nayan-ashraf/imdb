import React from 'react';
import Table from './common/table/table.component'

const MoviesTable = ({ movies, handleRating }) => {
  const columns = [
    {  label: '', content: movie => <img style={{width:'40px' , height:'50px'}} src={movie.posterurl} alt='img' />},
    {  label: 'Title', content: movie => movie.title },
    {  label: 'Rating', content: movie => movie.imdbRating },
    {  label: 'Your Rating', content: (movie, id) => <i class={( movie.isRated === true ) ? "fas fa-star":"far fa-star"} onClick={()=> handleRating(id) }></i>},
  ]
    return ( 
        <>
          <Table items={ movies } columns={ columns } />
        </>
          
     );
}
 
export default MoviesTable;