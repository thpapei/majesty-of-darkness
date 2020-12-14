import { useHistory } from 'react-router-dom';
import { startLogin } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { logIn } from '../state/slices/authSlice';
import { useEffect } from 'react';
import LoadingPage from './LoadingPage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);

  const handleLogin = () => {
    startLogin();
  }

  useEffect(() => {
    if (user) {
      dispatch(logIn(user?.uid));
      console.log('dispatched');
    }
  }, [user])

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       dispatch(logIn(user.uid));
  //       history.push('/majesty-of-darkness')
  //     } else {
  //       dispatch(logOut());
  //     }
  //   });
  // }, [userId, dispatch, history])


  if (!loading) {
    return (
      <>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
      </>
    )
  }
  if (loading) {
    return (
      <>
        <LoadingPage />
      </>
    )
  }
};

export default LoginPage;