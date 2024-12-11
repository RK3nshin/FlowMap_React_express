import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './routes/Home';
import SobreNos from "./routes/SobreNos";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Planos from "./routes/Planos";
import Servicos from './routes/Servicos';
import Kanban from './routes/Kanban'

import reportWebVitals from './reportWebVitals';
import{createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sobreNos",
        element: <SobreNos />,
      },
      {
        path: "assinaturas",
        element: <Planos />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "ferramentas",
        element: <Servicos />,
      },
    ],
  },
  {
    path: "/kanban",
    element: <Kanban />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
