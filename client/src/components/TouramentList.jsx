import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTournaments } from '../actions';
import Tournament from './Tournament';
import PaginationTour from './PaginationTour';

const TouramentList = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('useEffect called in TouramentList');
  //   dispatch(getTournaments());
  // }, []);

  // const tours1 = useSelector((state) => state.rootReducer.tour);
  const tours = useSelector((state) => state.rootReducer.tour.tours) || [];
  // let tours = useSelector((state) => state.rootReducer.tour.tours);
  // const tours = tours1 ? tours2 : [];
  // console.log('tours::', tours);

  const toursCount =
    useSelector((state) => state.rootReducer.tour.toursCount) || 8;

  return (
    <>
      <div className='tour-list'>
        <ul className='tournaments'>
          {tours.map((tour) => (
            <Tournament key={tour._id} tour={tour} />
          ))}
        </ul>
      </div>
      <div className='tour-list-pagination'>
        <PaginationTour toursCount={toursCount} />
      </div>
    </>
  );
};

export default TouramentList;
