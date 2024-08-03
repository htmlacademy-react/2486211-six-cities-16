import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Logo from '../logo/logo';

type HeaderProps = {
  authorizationStatus?: keyof typeof AuthorizationStatus;
}

const NavigateForUser = (): JSX.Element => (
  <>
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </Link>
    </li>
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.LOGIN}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  </>
);

const NavigateForLogin = (): JSX.Element => (
  <li className="header__nav-item user">
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);

const Header = ({authorizationStatus}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {authorizationStatus === AuthorizationStatus.AUTH ? <NavigateForUser /> : <NavigateForLogin />}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
