import { Link } from "react-router-dom";
import logo from '../img/flux-logo.png';
import perfil from "../img/user-1.jpg";
export default function Header() {
  return (
    <>
<header className="app-header border-bottom">
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      <Link to="/">
        <img src={logo} alt="flux-logo" width={80} className="logo-flux tittle" />
      </Link>
    </a>

    <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row justify-content-between">
    
            <ul className="navbar-nav ms-lg-auto align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={perfil}
                    alt=""
                    width="35"
                    height="35"
                    className="rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                >
                  <div className="message-body">
                    <p className="d-flex align-items-center gap-2 dropdown-item">Nome da Conta</p>
                    {/* <a href="/" className="d-flex align-items-center gap-2 dropdown-item">
                      <p className="mb-0">Minha conta</p>
                    </a> */}
                    <Link to="/login" className="btn btn-danger mx-3 mt-2 d-block">Sair</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    </>
  );
}
