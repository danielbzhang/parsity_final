import Nav from './Nav';
import TourForm from './TourForm';
import TouramentList from './TouramentList';
import '../css/tourmain.css';

const TournamentMain = () => {
  return (
    <>
      <Nav />
      <TourForm />
      <TouramentList />
    </>
  );
};

export default TournamentMain;
