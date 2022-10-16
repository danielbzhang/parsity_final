import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { handleLogout } from '../actions';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Logout Button
const Nav = () => {
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

  // if (authenticated) {
  //   return (
  //     <>
  //       <Button variant='outline-primary' size='sm' onClick={handleShow}>
  //         Log out
  //       </Button>

  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Body>Are you sure you want to log out?</Modal.Body>
  //         <Modal.Footer>
  //           <Button variant='outline-primary' onClick={handleClose}>
  //             No
  //           </Button>
  //           <Button variant='outline-danger' onClick={handleLogoutclick}>
  //             Yes
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <li>
  //         <Link to='/auth/register'>Register</Link>
  //       </li>
  //       <li>
  //         <Link to='/auth/login'>Log In</Link>
  //       </li>
  //     </>
  //   );
  // }
  return (
    <>
      <Button variant='outline-primary' size='sm' onClick={handleShow}>
        Log out
      </Button>

      <Modal show={show} onHide={handleClose}>
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
};

export default Nav;
