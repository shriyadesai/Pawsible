import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactNotifications } from 'react-notifications-component';

// css
import 'react-notifications-component/dist/theme.css';

ReactDOM.render(
  <HelmetProvider>
    <ReactNotifications/>
    <Router>
      <App />
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
);
