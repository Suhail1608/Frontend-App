import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import { toastContainerProps } from './config/toast.js';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
   
      <Provider store={store}>
        <ToastContainer {...toastContainerProps}/>
        <App />
      </Provider>
    ,
)
