import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <>
      <Login />
      <Home />
    </>
  );
}

export default App;