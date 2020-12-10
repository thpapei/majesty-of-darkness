import React, { useEffect } from 'react';
import LoginPage from './LoginPage';
import { auth } from './../firebase/firebase';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../state/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(logIn(user.uid))
      } else {
        dispatch(logOut());
      }
    });
  })
  return (
    <div className="App">
      <h1>App</h1>
      <LoginPage />
    </div>
  );
}

export default App;
