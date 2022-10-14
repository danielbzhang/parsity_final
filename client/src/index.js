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
// import Tournament from '../../models/Tournament';

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
      </Routes>
    </BrowserRouter>
  </Provider>
);
