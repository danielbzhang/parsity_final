import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { updateTournament, deleteTournament } from '../actions';

const Tournament = ({ tour }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(tour?.title);
  const [date, setDate] = useState(tour?.hostDate);
  const [location, setLocation] = useState(tour?.hostLocation);

  const [showTrash, setShowTrash] = useState(false);
  const handleCloseTrash = () => setShowTrash(false);
  const handleShowTrash = () => setShowTrash(true);

  const [showInfo, setShowInfo] = useState(false);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const tourData = { title, date, location };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);

    dispatch(updateTournament(tour._id, tourData));
  };

  return (
    <>
      <li className='tour-list-li'>
        <span className='tour-content' style={{ display: edit ? 'none' : '' }}>
          {tour.title}
        </span>
        <form
          style={{ display: edit ? 'inline' : 'none' }}
          onSubmit={onFormSubmit}
        >
          <input
            className='edit-tour'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>

        {/* <span
          className='edit-icon'
          onClick={() => dispatch(deleteTournament(tour._id))}
        > */}
        <span className='edit-icon' onClick={handleShowTrash}>
          <i className='fas fa-trash' />
        </span>

        <Modal show={showTrash} onHide={handleCloseTrash}>
          <Modal.Body>Are you sure you want to delete {tour.title}?</Modal.Body>
          <Modal.Footer>
            <Button variant='outline-primary' onClick={handleCloseTrash}>
              No
            </Button>
            <Button
              variant='outline-danger'
              onClick={() => dispatch(deleteTournament(tour._id))}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <span
          className='edit-icon'
          onClick={() => setEdit((prevState) => !prevState)}
        >
          <i className='fas fa-pen' />
        </span>

        <span className='edit-icon' onClick={handleShowInfo}>
          <i className='fas fa-info' />
        </span>

        <Modal show={showInfo} onHide={handleCloseInfo}>
          <Modal.Header closeButton>
            <Modal.Title>Tournament Info: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Date: {tour.hostDate}</li>
              <li>Location: {tour.hostLocation}</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-primary' onClick={handleCloseInfo}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal>
      </li>
    </>
  );
};

export default Tournament;
