import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header'
import Main from './componentes/Main/Main'

import{createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
     <Header/>
    <Main/>
    </>,
    
  
  },
  {
    path: "/noticias",
    element: <div>Pagina de Noticias!</div>,
  },
  {
    path: "/sobre",
    element: <div>Pagina sobre!</div>,
  },
  {
    path: "/contato",
    element: <div>Pagina de Contato!</div>,
  },


]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
