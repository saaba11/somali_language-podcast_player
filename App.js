import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, useAuth } from './context/AuthContext';

const App = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Check if the current path is the welcome, login, or register page
  const isAuthPage = ['/', '/login', '/register'].includes(location.pathname);

  return (
    <div className="App">
      <ToastContainer />
      <div className="flex h-screen">
        {isAuthenticated && !isAuthPage && <Sidebar />}
        <div className={`${isAuthenticated && !isAuthPage ? 'flex-1 overflow-y-auto' : 'w-full'}`}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const RootApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default RootApp;
