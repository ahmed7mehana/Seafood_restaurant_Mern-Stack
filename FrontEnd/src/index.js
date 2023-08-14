import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300&family=Kristi&family=Satisfy&family=Yesteryear&display=swap" rel="stylesheet"></link>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
<Provider store={store}>
<Navbar/>
<App />
<Footer/>
</Provider>
  </React.StrictMode>
);

