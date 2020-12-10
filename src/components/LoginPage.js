import { startLogin, startLogout } from '../firebase/firebase';
const LoginPage = () => {

  return (
    <>
      <button onClick={() => startLogin()}>Login</button>
      <button onClick={() => startLogout()}>Logout</button>
    </>
  )
};

export default LoginPage;