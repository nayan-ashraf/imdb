import React, { Component } from 'react';

class Filter extends Component {
    state = {  }
    render() { 
        return ( 
            <ul class="list-group">
            {
              this.props.genres.map( genre =>(
                <li 
                  key= {genre.id} 
                  className={ (this.props.selectedGenre == genre.name) ?'list-group-item active' : 'list-group-item'} 
                  onClick = {() => (this.props.handleSingleGenre(genre.name))}
                  style = {{'cursor': 'pointer'}}
                >
                  {genre.name}
                  
               </li>
  
              ))
            }
             
            </ul>
         );
    }
}
 
export default Filter;