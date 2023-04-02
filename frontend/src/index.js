import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*React Routerによるルーティングの設定が行えるようにBrowserRouterを設定*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
