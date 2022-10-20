import Nav from './Nav';
import TourForm from './TourForm';
import TouramentList from './TouramentList';
import '../css/tourmain.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TournamentMain = () => {
  const authenticated = useSelector(
    (state) => state.rootReducer.auth.authenticated
  );

  if (authenticated) {
    return (
      <>
        <div className='logout'>
          <Nav />
        </div>
        <div className='main-page'>
          <div className='tour-form-style'>
            <TourForm />
          </div>
          <div className='tour-form-style'>
            <TouramentList />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Please Login First!</h1>

        <Link to='/auth/login'>Go to Login Page</Link>
      </>
    );
  }
};

export default TournamentMain;
