import { NavLink, Link } from 'react-router-dom';
import logo from '../img/header-logo.png';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <HeaderSearch />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;