import React from 'react';


const TableHeader = ({ columns, onSort, sortedColumn }) => {
   const  handleSort = (path) => {
        if(sortedColumn.path === path) {
            if(sortedColumn.order ==='asc') onSort({path, order: 'desc'})
            else onSort({path, order: 'asc'})
        }
        else onSort({path, order: 'asc'});
    }
    return ( 

        <thead>
              <tr>
               {
                   columns.map( column => {  
                       return(
                        <th key={ column.label } scope="col" onClick={() => handleSort(column.path) }> 
                        { column.label }
                        {(sortedColumn.path== column.path) ? (sortedColumn.order ==='desc') ?<i class="fas fa-sort-amount-down pl-1"></i>:<i class="fas fa-sort-amount-down-alt pl-1"></i>: null}
                        </th>
                       )                
                      

                   })
               }
                
               
              </tr>
            </thead>
     );
}
 
export default TableHeader;