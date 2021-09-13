import React, { Component } from 'react';
import _ from 'lodash'

class Pagination extends Component {
    
    render() { 
        const { total, pageCount, activePage } = this.props;
        const totalPages = Math.ceil(total/pageCount);
        
        const pages = _.range(1, totalPages+1, 1)
        if(total <= pageCount ) return null;
        return (
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item ">
                <a class="page-link" href="#" tabindex="-1" style={{'cursor':'pointer'}}
                onClick={() => activePage > 1 ? this.props.onPageChange(activePage-1) : null}

                >
                  Previous
                </a>
              </li>
              {pages.map((page) => (
                <li
                  class={activePage === page ? "page-item active" : "page-item"}
                  
                >
                  <a class="page-link" onClick={()=>(this.props.onPageChange(page))} style={{'cursor':'pointer'}}>
                    {page}
                  </a>
                </li>
              ))}

              <li class="page-item">
                <a class="page-link" style={{'cursor':'pointer'}}
                onClick={()=>(activePage+1 <= totalPages ?this.props.onPageChange(activePage+1):null)}
                >Next</a>
              </li>
            </ul>
          </nav>
        );
    }
}
 
export default Pagination;