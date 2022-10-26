import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import store from './store';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import TournamentMain from './components/TournamentMain';
import PlayerList from './components/PlayerList';
import AllPlayers from './components/AllPlayers';
// import StripeMain from './components/StripeMain';
import ResultTree from './components/ResultTree';
import NoPageView from './components/NoPageView';

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />
        <Route exact path='/api/main' element={<TournamentMain />} />
        <Route exact path='/tours/:id/players' element={<PlayerList />} />
        <Route exact path='/tours/:id/allplayers' element={<AllPlayers />} />
        <Route exact path='/tours/:id/result' element={<ResultTree />} />
        <Route path='*' element={<NoPageView />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
