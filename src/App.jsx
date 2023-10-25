
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/layout/admin'
import DashboardPage from './pages/admin/dashboard'
import PortfoliosPage from './pages/admin/portfolios/Portfolio'
import SkillsPage from './pages/admin/skills'
import UsersPage from './pages/admin/users'
import HomePage from './pages/front/HomePage'

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard' /> : <HomePage />} />
        {
          isAuthenticated ? (
            <Route path='/' element={<AdminLayout />}>
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/skills' element={<SkillsPage />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path="portfolios" element={<PortfoliosPage />} />
            </Route>
          ) : null}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
