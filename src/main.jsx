import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// 動態設置 basename
// const basename = process.env.NODE_ENV === 'production' ? '/my-craftopiaPages' : '/';
// basename={basename}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>

    {/* 
    <BrowserRouter >
      <App />
    </BrowserRouter >
     */}
  </React.StrictMode>,
)
