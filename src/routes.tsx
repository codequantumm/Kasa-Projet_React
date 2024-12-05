import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import NotFound from './pages/NotFound'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/a-propos',
    element: <APropos />,
  },
  {
    path: '/ficheLogement/:id',
    element: <FicheLogement />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
