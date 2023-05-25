import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NewsProvider } from './content/newsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NewsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </NewsProvider>
);