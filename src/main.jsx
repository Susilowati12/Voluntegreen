import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter} from "react-router-dom"
import ScrollToTop from './Components/ScrollToTop';
import { Provider } from 'react-redux';
import {store} from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
  </Provider>
)
