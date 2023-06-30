import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/bootstrap-personalizado.scss"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Sobre from "./pages/Sobre.jsx"
import Clientes from './pages/Clientes.jsx'


const rotas = createBrowserRouter([   

  {
    path: '/sobre-nos',
    element: <Sobre/>
  },
  
  {
    path: '/nossos-clientes',
    element: <Clientes/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render( 
  
  <React.StrictMode>

  <RouterProvider router={rotas}>
  </RouterProvider>

</React.StrictMode>

)