import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { handleLogout } from '../actions';

const Nav = () => {
  const authenticated = useSelector(
    (state) => state.rootReducer.auth.authenticated
  );
  const username = useSelector((state) => state.rootReducer.auth.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutclick = () => {
    dispatch(
      handleLogout(() => {
        navigate('/auth/login');
      })
    );
  };

  if (authenticated) {
    return (
      <>
        {/* <li>Hello {username}!</li> */}
        <button onClick={handleLogoutclick}>Log out</button>
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
