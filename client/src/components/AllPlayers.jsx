import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Nav from './Nav';

import { getPlayers } from '../actions';

const AllPlayers = () => {
  const dispatch = useDispatch();
  const tourId = useSelector((state) => state.rootReducer.tourOne._id);
  // const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    dispatch(getPlayers(tourId));
  }, []);

  const [showTrash, setShowTrash] = useState(false);
  const handleCloseTrash = () => setShowTrash(false);
  const handleShowTrash = () => setShowTrash(true);

  const allPlayers = useSelector((state) => state.rootReducer.tourOne.players);
  console.log('AllpLyaers:', allPlayers);

  const renderPlayers = () => {
    return allPlayers.map((player) => {
      return (
        <tr key={player._id}>
          <td>{player.firstname}</td>
          <td>{player.lastname}</td>
          <td>{player.sex}</td>
          <td>{player.phone}</td>
          <td>{player.email}</td>
          <td>
            <span className='edit-icon' onClick={handleShowTrash}>
              <i className='fas fa-trash' />
            </span>

            <Modal show={showTrash} onHide={handleCloseTrash}>
              <Modal.Body>
                Are you sure you want to delete?
              </Modal.Body>
              <Modal.Footer>
                <Button variant='outline-primary' onClick={handleCloseTrash}>
                  No
                </Button>
                <Button
                  variant='outline-danger'
                  // onClick={() => dispatch(deleteTournament(tour._id))}
                >
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {/* <button onClick={handleLogoutclick}>Log out</button> */}
      <Nav />
      <Table className='player-table' striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>{renderPlayers()}</tbody>
      </Table>
    </>
  );
};

export default AllPlayers;
