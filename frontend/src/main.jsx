import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import { Provider } from 'react-redux';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
    <ToastContainer autoClose={1000} hideProgressBar={true} > 
      <Provider store={store}>
        <App />
      </Provider>
    </ToastContainer>,
)
