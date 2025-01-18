import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') == 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
}

export default App;