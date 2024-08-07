import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: keyof typeof AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={AppRoute.LOGIN} />
  );
}

export default PrivateRoute;
