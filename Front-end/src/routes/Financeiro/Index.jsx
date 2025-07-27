import { BarChart } from '../../components/BarChart';
import { GraficoPizza } from "../../components/GraficoPizza";

export default function Financeiro() {
    return (
        <>
            <div className="main">
                <h2 className="tittle">Financeiro</h2>
                <div className="container-financeiro">
                    <div className="cont3">
                        <BarChart />
                    </div>
                    <div className="cont3">
                        <GraficoPizza />
                    </div>
                </div>
                <div className="cont4">
                    <p>Vendas mensais</p>
                    <table className="table table-striped mx-auto my-4" style={{ width: '99%' }}>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Compras</th>
                                <th scope="col">Produtos</th>
                                <th scope="col">Preferido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Lorem, ipsum.</th>
                                <td>(99)999999999</td>
                                <td>9</td>
                                <td>9</td>
                                <td>Lorem.</td>
                            </tr>
                            <tr>
                                <th scope="row">Lorem, ipsum.</th>
                                <td>(99)999999999</td>
                                <td>9</td>
                                <td>9</td>
                                <td>Lorem.</td>
                            </tr>
                            <tr>
                                <th scope="row">Lorem, ipsum.</th>
                                <td>(99)999999999</td>
                                <td>9</td>
                                <td>9</td>
                                <td>Lorem.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}