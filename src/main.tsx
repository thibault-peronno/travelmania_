import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Header from './components/Header.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import store from './store';
import { Provider } from 'react-redux';
// import Spinner from './components/Spinner.tsx';
// import { useAppSelector } from './hooks.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Header />
        <App />
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>,
)
