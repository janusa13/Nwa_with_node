import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route imdex element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
