import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { handleLogout } from '../actions';
import styled from 'styled-components';

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
  return (
    <>
      <LogoutBtn>
        <Button variant='outline-primary' size='sm' onClick={handleShow}>
          Log out
        </Button>
      </LogoutBtn>

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

const LogoutBtn = styled.div`
  color: palevioletred;
`;

export default Nav;
