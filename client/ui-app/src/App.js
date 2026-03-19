import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './admin/theme/theme.js';
import Dashboard from './admin/components/Dashboard.js';
import MainGrid from './admin/components/MainGrid.js';
import PrivateRoute from './PrivateRoute.js'
import { SnackbarProvider } from 'notistack';
import Business from './admin/Business/business.js';
import Login from './admin/components/login/login.js';
import User from './admin/user/Users.js';
import Clients from './admin/clients/Client.js';
import Category from './admin/categories/Category.js';
import Location from './admin/location/Location.js';
import SeoData from './admin/seoData/seoData.js';
import SeoPageContent from './admin/seoData/seoPageContent/seoPageContent.js';
import Roles from './admin/Roles/Roles.js';
import AdvertisementPage from './admin/advertisement/advertisement.js';
import Profile from './admin/components/login/profile/profile.js';

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
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            margin: 0,
            padding: 0,
            overflowX: "hidden"
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Business />} />
              <Route
                path="/admin"
                element={
                  <Login
                    setIsAuthenticated={setIsAuthenticated}
                    isAuthenticated={isAuthenticated}
                  />
                }
              />

              <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<MainGrid />} />
                  <Route path="user" element={<User />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="clients" element={<Clients />} />
                  <Route path="business" element={<Business />} />
                  <Route path="category" element={<Category />} />
                  <Route path="location" element={<Location />} />
                  <Route path="seo" element={<SeoData />} />
                  <Route path="seopagecontent" element={<SeoPageContent />} />
                  <Route path="roles" element={<Roles />} />
                  <Route path="advertisements" element={<AdvertisementPage />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;