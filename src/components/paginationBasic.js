import React, { useState } from "react";
import Pagination from 'react-bootstrap/Pagination'

const PaginationBasic = ({total, itemsPerPage, changePage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    if(!total || !itemsPerPage)
        return <div></div>; 

    const maxPage = Math.ceil(total / itemsPerPage);

    /*
    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }
    */
    /*
    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }
    */

    function jump(page) {
        const pageNumber = Math.max(1, page);
        let gotoPage=Math.min(pageNumber, maxPage);
        setCurrentPage((currentPage) => gotoPage);
        changePage(gotoPage);
    }

    console.log(maxPage);
    console.log(currentPage);

    let active = currentPage;
    let items = [];
    for (let number = 1; number <= maxPage; number++) {
      items.push(
        <Pagination.Item onClick={()=>jump(number)} key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
    <div style={{marginLeft:"50%"}}>
        <Pagination>{items}</Pagination>
    </div>
    );
}

export default PaginationBasic

