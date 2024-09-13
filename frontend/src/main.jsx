import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
   
      <Provider store={store}>
        <ToastContainer rtl={false} autoClose={1000} hideProgressBar style={{textAlign:'left'}} stacked={true} toastStyle={{position:'absolute',transform:'none',top:0}}/>
        <App />
      </Provider>
    ,
)
