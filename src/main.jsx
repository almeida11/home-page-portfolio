import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// config routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home/Home';
import Letter from './routes/letter/Letter';

//ROTAS PADRÃO SEM REAPROVEITAR ELEMENTOS
const router = createBrowserRouter([
  {
    path: "/", //rota na url
    element: <Home/>, //pagina que vai carregar
  },
  {
    path: "letter", //rota na url
    element: <Letter/>, //pagina que vai carregar
  },
])

//ROTAS REAPROVEITANDO ELEMENTOS

// const router = createBrowserRouter([
//   {
//     path: "/", //rota na url
//     element: <App/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>,
//       },
//       {
//         path: "letter",
//         element: <Letter/>,
//       },
//     ]
//   },
//   {
//     path: "letter", //rota na url
//     element: <Letter/>, //pagina que vai carregar
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
