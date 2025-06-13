import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Construcao from './routes/Construcao/index.jsx'
import Financeiro from './routes/Financeiro/Index.jsx'
import Gerente from './routes/Gerente/Index.jsx'
import Vendedor from './routes/Vendedor/Index.jsx'
import Estoque from './routes/Estoque/Index.jsx'
import Clientes from './routes/Clientes/Index.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children: [
      {path: "/", element: <Gerente />},
      {path: "/vendedor", element: <Vendedor />},
      {path: "/pagina-em-construcao", element: <Construcao />},
      {path: "/financeiro", element: <Financeiro />},
      {path: "/estoque", element: <Estoque />},
      {path: "/clientes", element: <Clientes />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)