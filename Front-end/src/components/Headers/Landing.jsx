import { Link } from "react-router-dom";
import logo from '../img/flux-logo.png';
import perfil from "../img/user-1.jpg";
export default function Landing() {
  return (
    <>
<header className="app-header border-bottom">
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      <Link to="/">
        <img src={logo} alt="flux-logo" width={80} className="logo-flux tittle" />
      </Link>
    </a>
      </nav>
    </header>

    </>
  );
}
