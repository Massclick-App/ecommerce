import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { SnackbarProvider } from 'notistack';
import { EditorProvider } from 'react-simple-wysiwyg'; // ✅ ADD THIS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          
          {/* ✅ FIX HERE */}
          <EditorProvider>
            <App />
          </EditorProvider>

        </LocalizationProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();