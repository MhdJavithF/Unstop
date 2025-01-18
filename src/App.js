import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') == 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/auth/login"} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
}

export default App