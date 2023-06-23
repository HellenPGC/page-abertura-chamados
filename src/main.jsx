import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Solicitacao from './ui/Solicitacao.jsx'
import HomeCard from './ui/HomeCard.jsx'
import App from './App.jsx'

const rotas = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [

{
  path: "/solicitacao",
  element: <Solicitacao/>
},

{
path: "/",
element: <App/>
},

  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={rotas} />
</React.StrictMode>
);