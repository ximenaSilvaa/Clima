import { Routes, Route } from 'react-router-dom'
import './index.css'
import Grupos from './grupos'
import GrupoWrapper from '../componentes/GrupoWrapper'
import Bienvenida from './bienvenida'
import BuscarAlumno from './BuscarAlumno'
import Alumno from './alumno'
import Login from './login'
import Dashboard from './Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/buscar" element={<BuscarAlumno />} />
      <Route path="grupos" element={<Grupos />} />
      <Route path="/grupo/:id" element={<GrupoWrapper />} />
      <Route path="login" element={<Login />} />
      <Route path="/alumno" element={<Alumno />} />
    </Routes>
  )
}

export default App
