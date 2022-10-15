import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { getPlayers } from '../actions';
import PlayerOne from './PlayerOne';

const AllPlayers = () => {
  const dispatch = useDispatch();
  const tourId = useSelector((state) => state.rootReducer.tourOne._id);
  // const tours = useSelector((state) => state.rootReducer.tour);

  useEffect(() => {
    dispatch(getPlayers(tourId));
  }, []);

  const allPlayers = useSelector((state) => state.rootReducer.tourOne);

  return (
    <>
      <Table className='player-table' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {allPlayers.map((player) => (
            <PlayerOne key={player._id} player={player} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AllPlayers;
