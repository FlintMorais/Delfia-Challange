import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import RowReorder from "datatables.net-rowreorder";

DataTable.use(DT);
DataTable.use(RowReorder);

export default function Vendas() {
  return (
    <div className="table-responsive">  {/* wrapper do Bootstrap */}
      <DataTable
        id="Vendas"
        className="table table-striped table-bordered"
        options={{
          rowReorder: true,
          responsive: true,   // habilita o plugin de responsividade
        }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Compras</th>
            <th>Produtos</th>
            <th>Preferido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pedro</th>
            <td>(99)999999999</td>
            <td>2</td>
            <td>3</td>
            <td>Lorem.</td>
          </tr>
          <tr>
            <th>Mateus</th>
            <td>(99)999999999</td>
            <td>5</td>
            <td>6</td>
            <td>Lorem.</td>
          </tr>
          <tr>
            <th>Rafael</th>
            <td>(99)999999999</td>
            <td>1</td>
            <td>10</td>
            <td>Lorem.</td>
          </tr>
          <tr>
            <th>Lucas</th>
            <td>(99)999999999</td>
            <td>20</td>
            <td>1</td>
            <td>Lorem.</td>
          </tr>
        </tbody>
      </DataTable>
    </div>
  );
}
