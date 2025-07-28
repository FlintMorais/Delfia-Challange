// import logo from "../../components/img/flux-logo-sf.png"
import { Link } from "react-router-dom"
export default function Vendedor() {

    return (
        <>
            <div className="main">
                <h2 className="tittle">Vendedor</h2>
                <div className="container2">

                    <Link to="/pagina-em-construcao" className="cont2">
                        <span className="texto">Nova venda</span>
                    </Link>

                    <Link to="/pagina-em-construcao" className="cont2">
                        <span className="texto">Novo Cliente</span>
                    </Link>
                </div>
            </div>
        </>
    )
}