/* eslint-disable react/prop-types */
import { Pagination } from "react-bootstrap";

export const Paginations = ({totalData, dataPerPage, setPage, currentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalData/dataPerPage); i++) {
        pages.push(i);
    }

  return (
    <Pagination>
        <Pagination.First 
            className={`${currentPage == 1 ? 'disabled' : ''}`}
            onClick={() => setPage(1)} 
        />
        <Pagination.Prev 
            className={`${currentPage == 1 ? 'disabled' : ''}`}  
            onClick={() => setPage(currentPage - 1)} 
        />

        {
            pages.map((page, index) => (
                <Pagination.Item 
                    key={index} 
                    onClick={() => setPage(page)} 
                    active={currentPage === page}
                >
                    {page}
                </Pagination.Item>
            ))
        }

        <Pagination.Next 
            className={`${currentPage == pages[pages.length - 1] ? 'disabled' : ''}`} 
            onClick={() => setPage(currentPage + 1)}
        />
        <Pagination.Last
            className={`${currentPage == pages[pages.length - 1] ? 'disabled' : ''}`}
            onClick={() => setPage(pages[pages.length - 1])}
        />
    </Pagination>
  )
}
