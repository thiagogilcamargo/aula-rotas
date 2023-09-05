import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'



const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children:[
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/produtos",
      element: <Produtos />,
    },
    {
      path: "/produto/editar/:id", // Use :id para criar um parâmetro dinâmico
      element: <EditarProdutos />,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,

) 