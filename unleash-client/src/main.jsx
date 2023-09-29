import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FlagProvider } from '@unleash/proxy-client-react';
import { config } from './unleash';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FlagProvider config={config}>
          <App />
      </FlagProvider>
  </React.StrictMode>,
)
