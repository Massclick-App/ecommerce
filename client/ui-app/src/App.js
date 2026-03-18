import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './admin/theme/theme.js';
import Dashboard from './admin/components/Dashboard.js';
import MainGrid from './admin/components/MainGrid.js';
import PrivateRoute from './PrivateRoute.js';
import { SnackbarProvider } from 'notistack';
import Business from './admin/Business/business.js';
import Login from './admin/components/login/login.js';
import User from './admin/user/Users.js';

const ComingSoon = ({ title }) => (
  <div style={{ textAlign: 'center', marginTop: '20%' }}>
    <h2>{title} Page Coming Soon!</h2>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setAuthChecked(true);
    setIsAuthenticated(true);
  }, []);

  if (!authChecked) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        Loading...
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Router>
          <Routes>
            <Route path="/" element={<Business />} />
            <Route path="/admin" element={<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} />
              <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<MainGrid />} />
                <Route path="user" element={<User />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;