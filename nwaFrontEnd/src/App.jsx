import { useState } from 'react'
import StudentList from './components/Student/StudentList'
import Menu from './components/menu/menu';
import './App.css'
import Formulario from './components/Student/Form/formulario';

function App() {
  return (
    <div className="flex">
      <aside className="w-64">
        <Menu />
      </aside>
      <main className="flex-1 p-4">
        <StudentList />
      </main>
      <Formulario />
    </div>
  )
}

export default App
