import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { startLogout } from "../firebase/firebase";
import { logOut } from "../state/slices/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    startLogout();
    dispatch(logOut());
    history.push('/majesty-of-darkness/login')
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default App;
