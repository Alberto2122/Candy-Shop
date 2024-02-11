import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Loja } from './Pages/Loja';
import { Sobre } from './Pages/Sobre';
import { Contatos } from './Pages/Contato';
import Layout from './Componentes/Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/Loja',
        element: <Loja />,
      },

      {
        path: '/Sobre',
        element: <Sobre />,
      },

      {
        path: '/Contatos',
        element: <Contatos />,
      },
    ],
  },
]);

export { router };
