import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import RegisterStudent from './pages/registerStudent';
import LoginForm from './components/Login/loginForm';
import Register from "./pages/Register";
import ProtectedRoute from '../ProtectedRoute';

export default function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="registerStudent" element={<RegisterStudent />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
