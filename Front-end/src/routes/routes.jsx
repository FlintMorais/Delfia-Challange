import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Construcao from '../components/New';
import Financeiro from '../components/Body/Financeiro';
import Gerente from '../components/Body/Gerentes';
import Vendedor from '../components/Body/Vendedor';
import Login from '../components/Pages/Login';
import Registrar from '../components/Pages/Registrar';
import Menu from '../components/Headers/Menu';
import Clientes from '../components/Body/Clientes';
import Estoque from '../components/Body/Estoque';
import Header from '../components/Headers/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Gerente /> },
      { path: "/vendedor", element: <PVendedor /> },
      { path: "/financeiro", element: <PFinanceiro /> },
      { path: "/estoque", element: <PEstoque /> },
      { path: "/clientes", element: <PClientes /> },
      { path: "/login", element: <PLogin /> },
      { path: "/registrar", element: <PCadastro /> }
    ]
  }
]);

export default router;

function PClientes() {
  return (
    <>
      <Menu />
      <Clientes />
    </>
  );
}

function PEstoque() {
  return (
    <>
      <Menu />
      <Estoque />
    </>
  );
}

function PVendedor() {
  return (
    <>
      <Header/>
      <Vendedor />
    </>
  );
}

function PLogin() {
  return (
    <>
      <Login/>
    </>
  );
}

function PCadastro() {
    return (
    <>
        <Registrar/>
    </>
    );
}

function PFinanceiro() {
    return (
    <>
        <Menu></Menu>
        <Financeiro/>
    </>
    );
}