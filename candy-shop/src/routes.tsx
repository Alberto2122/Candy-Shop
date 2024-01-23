import {createBrowserRouter} from 'react-router-dom'
import {Home} from './Pages/Home'
import {Sobre} from './Pages/Sobre'
import {Contatos} from './Pages/Contatos'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }, 

    {
        path: "/Sobre",
        element: <Sobre/>
    }, 

    {
        path: "/Contatos",
        element: <Contatos/>
    }
])

export {router};