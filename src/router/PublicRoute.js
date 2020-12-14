import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, ...rest }) => {
  const userId = useSelector(state => state.auth.uid);

  return (
    <Route
      {...rest}
      render={() => (userId ? <Redirect to='/majesty-of-darkness' /> : children)}
    />
  );
}

export default PublicRoute;