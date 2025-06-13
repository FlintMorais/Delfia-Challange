// import logo from "../../components/img/flux-logo-sf.png"
import { Link } from "react-router-dom"
export default function Vendedor() {

    return (
        <>
            <div className="main">
                <h2 className="tittle">Área do vendedor</h2>
                <p className="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta corporis, perspiciatis nemo odio dignissimos saepe tempora doloribus vel in rem eligendi? Obcaecati blanditiis, quibusdam commodi, iusto soluta, hic nihil esse eius accusantium corporis aliquam.</p>

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