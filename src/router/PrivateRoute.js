import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const userId = useSelector(state => state.auth.uid)

  return (
    <Route
      {...rest}
      render={() => (userId ? children : <Redirect to='/majesty-of-darkness/login' />)}
    />
  );
}

export default PrivateRoute;