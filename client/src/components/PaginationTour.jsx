import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTournaments } from '../actions';

const PaginationTour = ({ toursCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  let nPages = Math.ceil(parseInt(toursCount) / 9);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const displayPage = (pgNumber) => {
    dispatch(getTournaments(pgNumber));
  };

  useEffect(() => {
    displayPage(currentPage);
  }, [currentPage]);

  const displayPagePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayPageNext = () => {
    if (currentPage !== nPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <nav>
        <h6>current page: {currentPage}</h6>
        {pageNumbers.length > 0 && (
          <ul className='pagination justify-content-center'>
            <li>
              <button className='page-link' onClick={() => displayPagePrev()}>
                {'<'}
              </button>
            </li>
            {pageNumbers.map((pgNumber) => (
              <li key={pgNumber}>
                {/* <a
                  onClick={() => setCurrentPage(pgNumber)}
                  className='page-link'
                  href='#'
                >
                  {pgNumber}
                </a> */}
                <button
                  onClick={() => setCurrentPage(pgNumber)}
                  className='page-link'
                >
                  {pgNumber}
                </button>
              </li>
            ))}
            <li>
              <button className='page-link' onClick={() => displayPageNext()}>
                {'>'}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default PaginationTour;
