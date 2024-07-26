import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout';
import RegisterStudent from './pages/registerStudent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registerStudent" element={<RegisterStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
