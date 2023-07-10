import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Homepage from './pages/homepage.jsx'
import Historypage from './pages/historypage.jsx'
import Cardapiopage from './pages/cardapiopage.jsx'
import Contatopage from './pages/contatopage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/historia",
        element: <Historypage/>
      },
      {
        path:"/cardapio",
        element: <Cardapiopage/>
      },
      {
        path:"/contato",
        element: <Contatopage/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
