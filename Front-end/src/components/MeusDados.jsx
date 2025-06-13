import "./MeusDados.css"
import logo from "./img/flux-logo-sf.png"
export default function MeusDados(props){


    return (
    // Fragment
        <>
            <img src={logo} alt="Flux logo" className="logo-flux"/>
            <p className="titulo">Seja bem vindo, {props.nome}!</p>
            <button onClick={props.alerta}>Clique</button>
        </>    
    )
}