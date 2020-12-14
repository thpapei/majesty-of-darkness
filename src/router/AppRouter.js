import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/majesty-of-darkness'>
          <App />
        </PrivateRoute>
        <PublicRoute path='/majesty-of-darkness/login'>
          <LoginPage />
        </PublicRoute>
      </Switch>
    </Router>
  );
}

export default AppRouter;