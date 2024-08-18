import './Header.scss';
import AppLogo from '../../assets/logo/brainblox-logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h2 className="visually-hidden">Header</h2>
      <div className="header__wrapper wrapper">
        <nav className="header__nav">
          <Link to="/">
            <img className="header__logo" src={AppLogo} alt="logo" />
          </Link>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <button className="header__btn btn">Sign in</button>
            </li>
            <li className="header__nav-item">
              <button className="header__btn btn">Sign up</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
