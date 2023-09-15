import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom"
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProduto from './routes/EditarProduto/index.jsx'
import Error from './routes/Error/index.jsx'


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
        path: "/produto/editar/:id", 
        element: <EditarProduto/>,
      },
      {
        path:"/antiga",
        element:<Navigate to="/"/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
