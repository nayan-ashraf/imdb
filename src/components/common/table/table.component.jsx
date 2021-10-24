import React from 'react';
import TableBody from './table-body.component';
import TableHeader from './table-header.component';


const Table = ({ columns, items, onSort, sortedColumn }) => {
    return ( 
        <table className="table table-striped" id="table" >
            <TableHeader columns={columns}  onSort={ onSort } sortedColumn={ sortedColumn }/>
            <TableBody columns={ columns } items= {items} />
          </table>
     );
}
 
export default Table;