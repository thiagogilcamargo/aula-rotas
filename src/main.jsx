

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProduto/index.jsx'



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
      path: "/produto/editar/:id", 
      element: <EditarProduto/>,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,

) 