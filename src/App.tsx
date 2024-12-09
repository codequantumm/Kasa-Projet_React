import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'

import './styles/App.scss'
import './styles/index.scss'
import './styles/mainLayout.scss'
import { routes } from './routes'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
