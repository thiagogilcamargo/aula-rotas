import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Importe o componente App corretamente
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import EditarProdutos from './routes/EditarProdutos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Certifique-se de que o componente App esteja definido e importado corretamente
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/produtos',
        element: <Produtos />,
      },
      {
        path: '/produto/editar/:id',
        element: <EditarProdutos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
