import { Link } from "react-router-dom";
import logo from '../img/flux-logo.png';
export default function Landing() {
  return (
    <>
<header className="app-header border-bottom">
  <nav className="navbar navbar-expand-lg navbar-light container-fluid">
    <Link to="/" className="navbar-brand">
      <img src={logo} alt="flux-logo" width={80} />
    </Link>

    <div className="ms-auto mx-4">
      <Link to="/login" className="btn btn-primary">
        Cadastre-se
      </Link>
    </div>
  </nav>
</header>

    </>
  );
}
