import logo from "../img/flux-logo.png"
import { Link } from "react-router-dom"
export default function Registrar(){
    return (
    // Fragment
        <>
            <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed">
                <div
                class="position-relative overflow-hidden text-bg-light min-vh-100 d-flex align-items-center justify-content-center">
                <div class="d-flex align-items-center justify-content-center w-100">
                    <div class="row justify-content-center w-100">
                    <div class="col-md-8 col-lg-6 col-xxl-3">
                        <div class="card mb-0">
                        <div class="card-body">
                            <Link to="/home" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                <img src={logo} alt="" width={100}></img>
                            </Link>
                            <form>
                            <div class="mb-3">
                                <label for="exampleInputtext1" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <a href="./index.html" class="btn btn-primary w-100 py-8 fs-5 mb-4 rounded-2">Cadastrar-se</a>
                            <div class="d-flex align-items-center justify-content-center">
                                <p class="mb-0 ">Já tem uma conta?</p>
                                <Link to="/login" className="text-primary  ms-2">Fazer Login</Link>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>    
    )
}