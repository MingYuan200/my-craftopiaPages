import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// 動態設置 basename
// const basename = process.env.NODE_ENV === 'production' ? '/my-craftopiaPages' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </React.StrictMode>,
)
