import './App.css';
import { Navigate } from 'react-router-dom';

const App = () => {
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <h2>Welcome!</h2>
  //     </header>
  //   </div>
  // );

  return <Navigate to='/auth/login' />;
};

export default App;
