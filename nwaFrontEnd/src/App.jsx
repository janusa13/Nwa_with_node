import { useState } from 'react'
import StudentList from './components/StudentList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentList />
    </>
  )
}

export default App
