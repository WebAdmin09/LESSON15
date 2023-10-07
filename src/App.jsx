
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/layout/admin'
import DashboardPage from './pages/admin/dashboard'
import SkillsPage from './pages/admin/skills'
import UsersPage from './pages/admin/users'
import HomePage from './pages/front/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<AdminLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
