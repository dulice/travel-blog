import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/styles";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store'
import { ContextProvider } from './components/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
       <ThemeProvider theme={theme} >
        <Provider store={store} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

