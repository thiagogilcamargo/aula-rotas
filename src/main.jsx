import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom"
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProduto from './routes/EditarProduto/index.jsx'
import Error from './routes/Error/index.jsx'
import ExcluirProdutos from './routes/ExcluirProdutos/index.jsx'
import InserirProduto from './routes/InserirProduto/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/editar/produtos/:id", 
        element: <EditarProduto/>,
      },
      {
        path:"/antiga",
        element:<Navigate to="/"/>
      },
      {
        path: "/excluir/produtos/:id",
        element: <ExcluirProdutos/>,
      },
      {
        path: '/inserir/produto',
        element: <InserirProduto />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
