import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { handleLogout } from '../actions';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Nav = () => {
  const authenticated = useSelector(
    (state) => state.rootReducer.auth.authenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogoutclick = () => {
    dispatch(
      handleLogout(() => {
        navigate('/auth/login');
      })
    );
  };

  if (authenticated) {
    return (
      // <>
      //   <button onClick={handleLogoutclick}>Log out</button>
      // </>
      <>
        <Button variant='outline-primary' size='sm' onClick={handleShow}>
          Log out
        </Button>

        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>Are you sure you want to log out?</Modal.Body>
          <Modal.Footer>
            <Button variant='outline-primary' onClick={handleClose}>
              No
            </Button>
            <Button variant='outline-danger' onClick={handleLogoutclick}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <li>
          <Link to='/auth/register'>Register</Link>
        </li>
        <li>
          <Link to='/auth/login'>Log In</Link>
        </li>
      </>
    );
  }
};

export default Nav;
