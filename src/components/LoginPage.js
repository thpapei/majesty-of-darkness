import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { auth, startLogin } from '../firebase/firebase';
import { logIn, logOut } from '../state/slices/authSlice';
import App from './App';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(state => state.auth.uid);

  const handleLogin = () => {
    startLogin();
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(logIn(user.uid));
        history.push('/majesty-of-darkness')
      } else {
        dispatch(logOut());
      }
    });
  }, [userId, dispatch, history])
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  )
};

export default LoginPage;