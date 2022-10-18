import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTournaments } from '../actions';
import Tournament from './Tournament';

const TouramentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  const tours = useSelector((state) => state.rootReducer.tour);

  return (
    <>
      <div>
        <ul>
          {tours.map((tour) => (
            <Tournament key={tour._id} tour={tour} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TouramentList;
