import { useDispatch } from "react-redux";
import { startLogout } from "../firebase/firebase";
import { logOut } from "../state/slices/authSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    startLogout().then(() => {
      dispatch(logOut());
    });
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default App;
