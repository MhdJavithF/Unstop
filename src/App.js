import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/auth/login" />} /> */}
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
}

export default App;