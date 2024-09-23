import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {


  
  const handlePageClick = (event) => {
    onPageChange(event.selected + 1);
  };



  return (
    <>
      <ReactPaginate
        className={s.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;