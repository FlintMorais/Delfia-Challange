// import logo from "../../components/img/flux-logo-sf.png"
import { Link } from "react-router-dom"
export default function Gerente() {

    return (
        <>
            <div className="main">
                <h2 className="tittle">Área do Gerente</h2>
                <p className="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta corporis, perspiciatis nemo odio dignissimos saepe tempora doloribus vel in rem eligendi? Obcaecati blanditiis, quibusdam commodi, iusto soluta, hic nihil esse eius accusantium corporis aliquam.</p>
                < div className="container">

                    <Link to="/financeiro" className="cont1">
                        <span className="texto">Financeiro</span>
                    </Link>

                    <Link to="/estoque" className="cont1">
                        <span className="texto">Estoque</span>
                    </Link>

                    <Link to="/pagina-em-construcao" className="cont1">
                        <span className="texto">Vendedores</span>
                    </Link>

                    <Link to="/clientes" className="cont1">
                        <span className="texto">Clientes</span>
                    </Link>
                    

                </div>
            </div>
        </>
    )
}