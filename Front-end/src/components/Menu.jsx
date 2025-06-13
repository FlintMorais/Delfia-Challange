import { Link } from "react-router-dom"
import logo from "./img/flux-logo-sf.png"
export default function Menu() {
    return (
        <>
            <div className="navbar">
                <Link to="/"><img src={logo} alt="flux-logo" className="logo-flux tittle" /></Link>
                <ul>
                    <li>
                        <Link to="/" className="my-link">Gerente</Link>
                    </li>
                    <li>
                        <Link to="/vendedor" className="my-link">Vendedor</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}